class PageDictionary {

    static #BASE = "Love Appetite";
    static #LANDING = `${PageDictionary.#BASE} - Home`;
    static #LOGIN = `${PageDictionary.#BASE} - Login`;
    static #REGISTER = `${PageDictionary.#BASE} - Register`;
    static #PROFILE = `${PageDictionary.#BASE} - Profile`;
    static #TRANSACTION_READ = `${PageDictionary.#BASE} - Order History`;

    static get BASE() {
        return this.#BASE;
    }

    static get LANDING() {
        return this.#LANDING;
    }

    static get LOGIN() {
        return this.#LOGIN;
    }

    static get REGISTER() {
        return this.#REGISTER;
    }

    static get PROFILE() {
        return this.#PROFILE;
    }

    static get TRANSACTION_READ() {
        return this.#TRANSACTION_READ;
    }
}

module.exports = PageDictionary;