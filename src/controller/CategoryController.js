const BaseController = require("./BaseController");
const ReferenceDictionary = require("../../dictionary/database/ReferenceDictionary");

class CategoryController extends BaseController {

    #reference = `${ReferenceDictionary.CATEGORY}/data`;

    async read() {
        return await super.read(this.#reference);
    }

}

module.exports = CategoryController;