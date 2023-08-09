const BaseModel = require("./BaseModel");

class TransactionModel extends BaseModel {
    #Address;
    #Email;
    #ID;
    #Name;
    #Paid;
    #PaymentID;
    #PhoneNumber;
    #ProductID;
    #Timestamp;
    #UserID;

    get Address() {
        return this.#Address;
    }

    set Address(value) {
        this.#Address = value;
    }

    get Email() {
        return this.#Email;
    }

    set Email(value) {
        this.#Email = value;
    }

    get ID() {
        return this.#ID;
    }

    set ID(value) {
        this.#ID = value;
    }

    get Name() {
        return this.#Name;
    }

    set Name(value) {
        this.#Name = value;
    }

    get Paid() {
        return this.#Paid;
    }

    set Paid(value) {
        this.#Paid = value;
    }

    get PaymentID() {
        return this.#PaymentID;
    }

    set PaymentID(value) {
        this.#PaymentID = value;
    }

    get PhoneNumber() {
        return this.#PhoneNumber;
    }

    set PhoneNumber(value) {
        this.#PhoneNumber = value;
    }

    get ProductID() {
        return this.#ProductID;
    }

    set ProductID(value) {
        this.#ProductID = value;
    }

    get Timestamp() {
        return this.#Timestamp;
    }

    set Timestamp(value) {
        this.#Timestamp = value;
    }

    get UserID() {
        return this.#UserID;
    }

    set UserID(value) {
        this.#UserID = value;
    }

    toJSON() {
        let json = {};

        if (this.Address !== undefined) {
            json.Address = this.Address;
        }

        if (this.Email !== undefined) {
            json.Email = this.Email;
        }

        if (this.ID !== undefined) {
            json.ID = this.ID;
        }

        if (this.Name !== undefined) {
            json.Name = this.Name;
        }

        if (this.Paid !== undefined) {
            json.Paid = this.Paid;
        }

        if (this.PaymentID !== undefined) {
            json.PaymentID = this.PaymentID;
        }

        if (this.PhoneNumber !== undefined) {
            json.PhoneNumber = this.PhoneNumber;
        }

        if (this.ProductID !== undefined) {
            json.ProductID = this.ProductID;
        }

        if (this.Timestamp !== undefined) {
            json.Timestamp = this.Timestamp;
        }

        if (this.UserID !== undefined) {
            json.UserID = this.UserID;
        }

        return json;
    }
}

module.exports = TransactionModel;