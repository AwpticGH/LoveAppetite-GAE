const BaseController = require("./BaseController");
const ReferenceDictionary = require("../../dictionary/database/ReferenceDictionary");

class PaymentController extends BaseController {

    #reference = `${ReferenceDictionary.PAYMENT}/data`;

    async read() {
        return await super.read(this.#reference);
    }

}

module.exports = PaymentController;