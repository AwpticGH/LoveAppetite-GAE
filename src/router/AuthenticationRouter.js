const AlertDictionary = require("../../dictionary/web/AlertDictionary");
const PageDictionary = require("../../dictionary/web/PageDictionary");
const RouterDictionary = require("../../dictionary/web/RouterDictionary");
const QueryDictionary = require("../../dictionary/web/QueryDictionary");
const SessionDictionary = require("../../dictionary/web/SessionDictionary");
const UserModel = require("../model/UserModel");
const UserController = require("../controller/UserController");

const express = require("express");
const router = express.Router();

// Login Page
router.get(RouterDictionary.LOGIN, (request, response) => {
    return response.render("user/login", {
        layout: "templates/main",
        page_title: PageDictionary.LOGIN
    });
});

// Logout
router.get(RouterDictionary.LOGOUT, (request ,response) => {
    request.session.destroy();

    return response.redirect(RouterDictionary.INDEX);
});

// Register Page
router.get(RouterDictionary.REGISTER, (request, response) => {
    return response.render("user/register", {
        layout: "templates/main",
        page_title: PageDictionary.REGISTER
    });
});

// User (Read) Page
router.get(RouterDictionary.USER_READ, (request, response) => {
    return response.render("user/read", {
        layout: "templates/bootstrap",
        page_title: PageDictionary.PROFILE
    });
});

router.post(RouterDictionary.LOGIN, async (request, response) => {
    let model = new UserModel();
    model.email = request.body[QueryDictionary.USER_EMAIL];
    model.password = request.body[QueryDictionary.USER_PASSWORD];

    let controller = new UserController();
    let result = await controller.login(model);
    if (result !== undefined) {
        request.session[SessionDictionary.USER_MODEL] = result;
    } else {
        request.session[SessionDictionary.ALERT] = AlertDictionary.LOGIN_FAILED;
    }

    let halamanBaru = result !== undefined ? RouterDictionary.INDEX : RouterDictionary.LOGIN;
    return response.redirect(halamanBaru);
});

router.post(RouterDictionary.REGISTER, async (request, response) => {
    let model = new UserModel();
    model.email = request.body[QueryDictionary.USER_EMAIL];
    model.password = request.body[QueryDictionary.USER_PASSWORD];
    model.name = request.body[QueryDictionary.USER_NAME];
    model.phoneNumber = request.body[QueryDictionary.USER_PHONE_NUMBER];
    model.address = request.body[QueryDictionary.USER_ADDRESS];

    let controller = new UserController();
    let result = await controller.register(model);
    request.session[SessionDictionary.ALERT] = result ? AlertDictionary.REGISTER_SUCCESS : AlertDictionary.REGISTER_FAILED;

    let halamanBaru = result ? RouterDictionary.LOGIN : RouterDictionary.REGISTER;
    return response.redirect(halamanBaru);
});

router.post(RouterDictionary.USER_READ, async (request, response) => {
    let model = new UserModel();
    model.id = request.session[SessionDictionary.USER_MODEL].id;
    model.name = request.body[QueryDictionary.USER_NAME];
    model.email = request.body[QueryDictionary.USER_EMAIL];
    model.password = request.body[QueryDictionary.USER_PASSWORD];
    model.phoneNumber = request.body[QueryDictionary.USER_PHONE_NUMBER];
    model.address = request.body[QueryDictionary.USER_ADDRESS];

    let controller = new UserController();
    let result = await controller.update(model);
    request.session[SessionDictionary.ALERT] = result ? AlertDictionary.USER_UPDATE_SUCCESS : AlertDictionary.USER_UPDATE_FAILED;

    return response.redirect(RouterDictionary.USER_READ);
});

module.exports = router;