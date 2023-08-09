const firebaseApp = require("firebase/app");

class FirebaseConfig {
    static #firebaseConfig = {
        apiKey: "AIzaSyCHIhoPme2B4VpPJo_cdr2VJz8TTOZwqOU",
        authDomain: "project-ccit.firebaseapp.com",
        databaseURL: "https://project-ccit-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "project-ccit",
        storageBucket: "project-ccit.appspot.com",
        messagingSenderId: "973679664713",
        appId: "1:973679664713:web:34fb8869c8d440910da998",
        measurementId: "G-Y3S1BBVLHN"
    };

    static init() {
        // Initialize Firebase
        return firebaseApp.initializeApp(this.#firebaseConfig);
    }

    static getFirebase() {
        return firebaseApp;
    }
}

module.exports = FirebaseConfig;