class SessionDictionary {
    static #ALERT = "my-alert";
    static #USER_MODEL = "authenticated-user";

    static get ALERT() {
        return this.#ALERT;
    }

    static get USER_MODEL() {
        return this.#USER_MODEL;
    }
}

module.exports = SessionDictionary;