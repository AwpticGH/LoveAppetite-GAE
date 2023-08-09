const BaseModel = require("./BaseModel");

class UserModel extends BaseModel {
    #email;
    #id;
    #name;
    #password;
    #phoneNumber;
    #address;

    get email() {
        return this.#email;
    }

    set email(value) {
        this.#email = value;
    }

    get id() {
        return this.#id;
    }

    set id(value) {
        this.#id = value;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get password() {
        return this.#password;
    }

    set password(value) {
        this.#password = value;
    }

    get phoneNumber() {
        return this.#phoneNumber;
    }

    set phoneNumber(value) {
        this.#phoneNumber = value;
    }

    get address() {
        return this.#address;
    }

    set address(value) {
        this.#address = value;
    }

    toJSON() {
        let json = {};

        if (this.email !== undefined) {
            json.email = this.email;
        }

        if (this.id !== undefined) {
            json.id = this.id;
        }

        if (this.name !== undefined) {
            json.name = this.name;
        }

        if (this.password !== undefined) {
            json.password = this.password;
        }

        if (this.phoneNumber !== undefined) {
            json.phoneNumber = this.phoneNumber;
        }

        if (this.address !== undefined) {
            json.address = this.address;
        }

        return json;
    }
}

module.exports = UserModel;