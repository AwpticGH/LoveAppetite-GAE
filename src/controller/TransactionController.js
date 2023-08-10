const BaseController = require("./BaseController");
const TransactionModel = require("../model/TransactionModel");
const ReferenceDictionary = require("../../dictionary/database/ReferenceDictionary");
const {
    getDatabase,
    ref,
    child,
    set
} = require("firebase/database");

class TransactionController extends BaseController {

    #reference = `${ReferenceDictionary.TRANSACTION}/data`;

    async getSize() {
        return await super.getSize(this.#reference);
    }

    async read(model) {
        let results;

        if (model instanceof TransactionModel) {
            let snapshot = await super.getSnapshot(this.#reference);

            if (snapshot !== undefined && snapshot.exists()) {

                snapshot.forEach((data) => {

                    if (data !== undefined && data.exists()) {
                        if (data.val().UserID !== undefined && data.val().UserID === model.UserID) {
                            if (results === undefined) {
                                results = [];
                            }
                            results.push(data.val());
                        }

                    }

                });

            }
        } else {
            throw new Error(`${__filename}: model must be of type TransactionModel`);
        }

        return results;
    }

    async create(model) {
        let result = false;

        if (model instanceof TransactionModel) {
            let date = new Date();
            let day = date.getDate();
            let month = date.getMonth();
            let year = date.getFullYear();

            let hour = date.getHours();
            let minute = date.getMinutes();
            let second = date.getSeconds();

            if (day < 10) day = `0${day}`;
            if (month < 10) month = `0${month}`;

            if (hour < 10) hour = `0${hour}`;
            if (minute < 10) minute = `0${minute}`;
            if (second < 10) second = `0${second}`;

            model.Paid = "0";
            model.Timestamp = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
            model.ID = await this.getSize() + 1;
            let key = (model.ID - 1).toString();
            model.ID = model.ID.toString();

            console.log(model.toJSON());

            await set(child(ref(getDatabase(), this.#reference), key), model.toJSON())
                .then(() => {
                    result = true;
                });
        } else {
            throw new Error(`${__filename}: model must be of type TransactionModel`);
        }

        return result;
    }

}

module.exports = TransactionController;