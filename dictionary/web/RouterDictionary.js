class RouterDictionary {
    static #INDEX = "/";
    static #LOGIN = "/login";
    static #REGISTER = "/register";
    static #LOGOUT = "/logout";
    static #USER_READ = "/profile";
    static #TRANSACTION_READ = "/order-history";
    static #TRANSACTION_CREATE = "/order";

    static get INDEX() {
        return this.#INDEX;
    }

    static get LOGIN() {
        return this.#LOGIN;
    }

    static get REGISTER() {
        return this.#REGISTER;
    }

    static get LOGOUT() {
        return this.#LOGOUT;
    }

    static get USER_READ() {
        return this.#USER_READ;
    }

    static get TRANSACTION_READ() {
        return this.#TRANSACTION_READ;
    }

    static get TRANSACTION_CREATE() {
        return this.#TRANSACTION_CREATE;
    }
}

module.exports = RouterDictionary;