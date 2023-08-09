const RouterDictionary = require("../../dictionary/web/RouterDictionary");

const express = require("express");
const router = express.Router();

// Login Page
router.get(RouterDictionary.LOGIN, (request, response) => {
    return response.render("user/login", {
        layout: "templates/main",
        page_title: "Love Appetite - Login"
    });
});

// Register Page
router.get(RouterDictionary.REGISTER, (request, response) => {
    return response.render("user/register", {
        layout: "templates/main",
        page_title: "Love Appetite - Register"
    });
});

