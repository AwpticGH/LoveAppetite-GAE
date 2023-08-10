const BaseController = require("./BaseController");
const UserModel = require("../model/UserModel");
const ReferenceDictionary = require("../../dictionary/database/ReferenceDictionary");
const {
    getDatabase,
    ref,
    get,
    child,
    set,
    update
} = require("firebase/database");

class UserController extends BaseController {

    #reference = `${ReferenceDictionary.USER}/data`;

    async getSize() {
        return await super.getSize(this.#reference);
    }

    async login(model) {
        let result;

        if (model instanceof UserModel) {
            let snapshot = await get(ref(getDatabase(), this.#reference));

            if (snapshot !== undefined && snapshot.exists()) {

                let found = false;
                snapshot.forEach((data) => {

                    if (data !== undefined && data.exists()) {

                        if (data.val().email === model.email) {
                            found = true;
                            if (data.val().password === model.password) {
                                result = data.val();
                            }
                        }

                    }

                });
                if (!found) {
                    // TODO: Create alert

                }

            }
        } else {
            throw new Error(`${__filename}: model must be of type UserModel`);
        }

        return result;
    }

    async register(model) {
        let result = false;
        let length = await this.getSize();

        if (model instanceof UserModel) {
            model.id = length + 1;
            try {
                await set(child(ref(getDatabase(), this.#reference), length.toString()), model.toJSON())
                    .then(async () => {
                        let newLength = await this.getSize();
                        result = newLength === length + 1;
                    });
            } catch (error) {
                console.log(error);
            }
        } else {
            throw new Error(`${__filename}: model must be of type UserModel`);
        }

        return result;
    }

    async read(model) {
        let result;

        if (model instanceof UserModel) {
            let id = (model.id).toNumber();
            let snapshot = await get(child(ref(getDatabase(), this.#reference), (id - 1).toString()));
            if (snapshot !== undefined && snapshot.exists()) {
                result = snapshot.val();
            }
        } else {
            throw new Error(`${__filename}: model must be of type UserModel`);
        }

        return result;
    }

    async update(model) {
        let result = false;

        if (model instanceof UserModel) {
            try {
                let id = Number.parseInt(model.id);
                await update(child(ref(getDatabase(), this.#reference), (id - 1).toString()), model.toJSON())
                    .then(() => {
                        result = true;
                    });
            } catch (error) {
                console.log(error);
            }
        } else {
            throw new Error(`${__filename}: model must be of type UserModel`);
        }

        return result;
    }

}

module.exports = UserController;