class ReferenceDictionary {
    static #CATEGORY = "2";
    static #PAYMENT = "3";
    static #PRODUCT = "4";
    static #TRANSACTION = "5";
    static #USER = "6";

    static get CATEGORY() {
        return this.#CATEGORY;
    }

    static get PAYMENT() {
        return this.#PAYMENT;
    }

    static get PRODUCT() {
        return this.#PRODUCT;
    }

    static get TRANSACTION() {
        return this.#TRANSACTION;
    }

    static get USER() {
        return this.#USER;
    }
}

module.exports = ReferenceDictionary;