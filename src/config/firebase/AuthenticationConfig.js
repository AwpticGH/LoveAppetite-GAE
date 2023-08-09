const {
    getAuth
} = require("firebase/database");
const FirebaseConfig = require("./FirebaseConfig");

class AuthenticationConfig {
    static getAuthentication() {
        return getAuth(FirebaseConfig.getFirebase().getApp());
    }

    static getCurrentUser() {
        return this.getAuthentication().currentUser;
    }
}

module.exports = AuthenticationConfig;