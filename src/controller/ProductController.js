const BaseController = require("./BaseController");
const ReferenceDictionary = require("../../dictionary/database/ReferenceDictionary");

class ProductController extends BaseController {

    #reference = `${ReferenceDictionary.PRODUCT}/data`;

    async read() {
        return await super.read(this.#reference);
    }

}

module.exports = ProductController;