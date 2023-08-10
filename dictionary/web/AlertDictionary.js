class AlertDictionary {

    static #LOGIN_FAILED = "Incorrect Credentials, Please Try Again";
    static #REGISTER_SUCCESS = "Register Success!";
    static #REGISTER_FAILED = "Register Failed!";
    static #USER_UPDATE_SUCCESS = "Update Profile Success!";
    static #USER_UPDATE_FAILED = "Update Profile Failed, Please Try Again Later!";
    static #TRANSACTION_CREATE_SUCCESS = "Successfully Ordered Food, Thank You!!";
    static #TRANSACTION_CREATE_FAILED = "Failed To Order Food, Please Try Again Later!";
    static #TRANSACTION_READ_EMPTY = "You Have Not Ordered Anything, Please Order First!";

    static get LOGIN_FAILED() {
        return this.#LOGIN_FAILED;
    }

    static get REGISTER_SUCCESS() {
        return this.#REGISTER_SUCCESS;
    }

    static get REGISTER_FAILED() {
        return this.#REGISTER_FAILED;
    }

    static get USER_UPDATE_SUCCESS() {
        return this.#USER_UPDATE_SUCCESS;
    }

    static get USER_UPDATE_FAILED() {
        return this.#USER_UPDATE_FAILED;
    }

    static get TRANSACTION_READ_EMPTY() {
        return this.#TRANSACTION_READ_EMPTY;
    }

    static get TRANSACTION_CREATE_SUCCESS() {
        return this.#TRANSACTION_CREATE_SUCCESS;
    }

    static get TRANSACTION_CREATE_FAILED() {
        return this.#TRANSACTION_CREATE_FAILED;
    }
}

module.exports = AlertDictionary;