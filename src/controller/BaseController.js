const {
    getDatabase,
    ref,
    get,
} = require("firebase/database");

class BaseController {

    async getSize(reference) {
        let snapshot = await get(ref(getDatabase(), reference));

        return snapshot.size;
    }

    async getSnapshot(reference) {
        return await get(ref(getDatabase(), reference));
    }

    async read(reference) {
        let results;

        let snapshot = await this.getSnapshot(reference);
        if (snapshot !== undefined && snapshot.exists()) {

            snapshot.forEach((data) => {

                if (data !== undefined && data.exists()) {
                    if (results === undefined) {
                        results = [];
                    }
                    results.push(data.val());
                }

            });

        }

        return results;
    }

}

module.exports = BaseController;