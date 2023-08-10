const SessionDictionary = require("../../dictionary/web/SessionDictionary");

class AuthenticationFlag {

    static isAuthenticated(request) {
        return request.session[SessionDictionary.USER_MODEL] !== undefined;
    }
}

module.exports = AuthenticationFlag;