const FirebaseConfig = require("../config/firebase/FirebaseConfig");
const FirebaseFlag = require("../flag/FirebaseFlag");

let middleware = (request, response, next) => {
    if (!FirebaseFlag.isInitialized()) {
        FirebaseConfig.init();
        console.log("Firebase Initialized");
    }

    next();
}

module.exports = middleware;