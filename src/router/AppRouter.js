const RouterDictionary = require("../../dictionary/web/RouterDictionary");

const express = require("express");
const router = express.Router();

// Index / Home Page
router.get(RouterDictionary.INDEX, (request, response) => {
    return response.render("index", {
        layout: "templates/main",
        page_title: "Love Appetite"
    });
});

// User (Read) Page
router.get(RouterDictionary.USER_READ, (request, response) => {
    return response.render("user/read", {
        layout: "templates/main",
        page_title: "Love Appetite - Profile"
    });
});

// Transaction (Read) Page
router.get(RouterDictionary.TRANSACTION_READ, (request, response) => {
    return response.render("transaction/read", {
        layout: "templates/main",
        page_title: "Love Appetite - Order History"
    });
});

module.exports = router;