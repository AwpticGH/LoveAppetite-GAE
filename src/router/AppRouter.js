const AlertDictionary = require("../../dictionary/web/AlertDictionary");
const PageDictionary = require("../../dictionary/web/PageDictionary");
const QueryDictionary = require("../../dictionary/web/QueryDictionary");
const RouterDictionary = require("../../dictionary/web/RouterDictionary");
const SessionDictionary = require("../../dictionary/web/SessionDictionary");
const AuthenticationFlag = require("../flag/AuthenticationFlag");
const TransactionModel = require("../model/TransactionModel");
const TransactionController = require("../controller/TransactionController");
const CategoryController = require("../controller/CategoryController");
const PaymentController = require("../controller/PaymentController");
const ProductController = require("../controller/ProductController");

const express = require("express");
const router = express.Router();

// Index / Home Page
router.get(RouterDictionary.INDEX, async (request, response) => {
    let productController = new ProductController();
    let products = await productController.read();

    let paymentController = new PaymentController();
    let payments = await paymentController.read();

    return response.render("index", {
        layout: "templates/main",
        page_title: PageDictionary.LANDING,
        products: products,
        payments: payments
    });
});

// Transaction (Read) Page
router.get(RouterDictionary.TRANSACTION_READ, async (request, response) => {
    let model = new TransactionModel();
    model.UserID = request.session[SessionDictionary.USER_MODEL].id;

    let controller = new TransactionController();
    let transactions = await controller.read(model);
    if (transactions === undefined || transactions.length === 0) {
        request.session[SessionDictionary.ALERT] = AlertDictionary.TRANSACTION_READ_EMPTY;
        return response.redirect(RouterDictionary.USER_READ);
    }

    let categoryController = new CategoryController();
    let categories = await categoryController.read();

    let productController = new ProductController();
    let products = await productController.read();

    let paymentController = new PaymentController();
    let payments = await paymentController.read();



    return response.render("transaction/read", {
        layout: "templates/main",
        page_title: PageDictionary.TRANSACTION_READ,
        transactions: transactions,
        categories: categories,
        products: products,
        payments: payments
    });
});

router.post(RouterDictionary.TRANSACTION_CREATE, async (request, response) => {
    let model = new TransactionModel();
    if (AuthenticationFlag.isAuthenticated(request)) {
        model.UserID = request.session[SessionDictionary.USER_MODEL].id;
    }
    model.Name = request.body[QueryDictionary.USER_NAME];
    model.Email = request.body[QueryDictionary.USER_EMAIL];
    model.Address = request.body[QueryDictionary.USER_ADDRESS];
    model.PhoneNumber = request.body[QueryDictionary.USER_PHONE_NUMBER];
    model.ProductID = request.body[QueryDictionary.PRODUCT];
    model.PaymentID = request.body[QueryDictionary.PAYMENT];

    let controller = new TransactionController();
    let result = await controller.create(model);
    request.session[SessionDictionary.ALERT] = result ? AlertDictionary.TRANSACTION_CREATE_SUCCESS : AlertDictionary.TRANSACTION_CREATE_FAILED;

    return response.redirect(RouterDictionary.INDEX);
});

module.exports = router;