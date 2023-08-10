class QueryDictionary {
    static #USER_ID = "user-id";
    static #USER_EMAIL = "user-email";
    static #USER_PASSWORD = "user-password";
    static #USER_NAME = "user-name";
    static #USER_PHONE_NUMBER = "user-phone-number";
    static #USER_ADDRESS = "user-address";

    static #PRODUCT = "product";
    static #PAYMENT = "payment";

    static get USER_ID() {
        return this.#USER_ID;
    }

    static get USER_EMAIL() {
        return this.#USER_EMAIL;
    }

    static get USER_PASSWORD() {
        return this.#USER_PASSWORD;
    }

    static get USER_NAME() {
        return this.#USER_NAME;
    }

    static get USER_PHONE_NUMBER() {
        return this.#USER_PHONE_NUMBER;
    }

    static get USER_ADDRESS() {
        return this.#USER_ADDRESS;
    }

    static get PRODUCT() {
        return this.#PRODUCT;
    }

    static get PAYMENT() {
        return this.#PAYMENT;
    }
}

module.exports = QueryDictionary;