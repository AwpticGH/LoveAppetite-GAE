const RouterDictionary = require("../../dictionary/web/RouterDictionary");
const QueryDictionary = require("../../dictionary/web/QueryDictionary");

const middleware = (request, response, next) => {
    response.locals.RouterDictionary = RouterDictionary;
    response.locals.QueryDictionary = QueryDictionary;

    next();
}

module.exports = middleware;