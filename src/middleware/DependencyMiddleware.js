const PageDictionary = require("../../dictionary/web/PageDictionary");
const RouterDictionary = require("../../dictionary/web/RouterDictionary");
const QueryDictionary = require("../../dictionary/web/QueryDictionary");
const SessionDictionary = require("../../dictionary/web/SessionDictionary");
const AuthenticationFlag = require("../flag/AuthenticationFlag");

const middleware = (request, response, next) => {
    response.locals.PageDictionary = PageDictionary;
    response.locals.RouterDictionary = RouterDictionary;
    response.locals.QueryDictionary = QueryDictionary;
    response.locals.SessionDictionary = SessionDictionary;
    response.locals.request = request;
    response.locals.AuthenticationFlag = AuthenticationFlag;

    next();
}

module.exports = middleware;