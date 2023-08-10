const AuthenticationFlag = require("../flag/AuthenticationFlag");
const RouterDictionary = require("../../dictionary/web/RouterDictionary");

const express = require("express");
const router = express.Router();

const middleware = (request, response, next) => {
    if (!AuthenticationFlag.isAuthenticated(request)) {
        return response.redirect(RouterDictionary.LOGIN);
    }

    next();
}

router.use(RouterDictionary.USER_READ, middleware);
router.use(RouterDictionary.TRANSACTION_READ, middleware);

module.exports = router;