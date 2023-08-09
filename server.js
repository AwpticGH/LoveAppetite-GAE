/*
 * TODO:
 *      [x]  1. web
 *      [x]      - public
 *      [x]      - views
 *      [x]  2. dictionary
 *      [x]      - RouterDictionary
 *      [x]      - database/ReferenceDictionary
 *      []  3. src/model
 *      []      - BaseModel
 *      []      - TransactionModel
 *      []      - UserModel
 *      []  4. src/controller
 *      []      - BaseController
 *      []      - CategoryController
 *      []      - PaymentController
 *      []      - ProductController
 *      []      - TransactionController
 *      []      - UserController
 *      []  5. src/config
 *      []      - AuthenticationConfig
 *      []      - FirebaseConfig
 *      []      - EncryptionConfig
 *      []  6. src/middleware/WebMiddleware
 *      []  7. src/router
 *      []      - AppRouter
 *      []      - AuthenticationRouter
 *      []  8. src/flag
 *      []      - AuthenticationFlag
 *      []      - FirebaseFlag
 */

// Dependencies
// App
const StringGenerator = require("./src/helper/StringGenerator");
const DependencyMiddleware = require("./src/middleware/DependencyMiddleware");
const AppRouter = require("./src/router/AppRouter");

// Core
const path = require("path");

// Third-Party
const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const session = require("express-session");

// Server
const app = express();
app.set("views", "./web/views");
app.set("view engine", "ejs");
app.set("trust proxy", true);
app.use(ejsLayouts);

// Live Reload Untuk Fase Development (Refresh Otomatis Di Web Setiap Ada Perubahan File)
if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === undefined) {
    const liveReload = require("livereload");
    const connectLiveReload = require("connect-livereload");

    const liveReloadServer = liveReload.createServer();
    liveReloadServer.watch(path.join(__dirname, "/web"));
    liveReloadServer.server.once("connection", () => {
        setTimeout(() => {
            liveReloadServer.refresh("/");
        }, 100);
    });
    app.use(connectLiveReload());
}

// Express Session Untuk Penyimpanan Data Cache Web
app.use(
    session({
        secret: StringGenerator.generateSecretKey(),
        resave: false,
        saveUninitialized: false
    })
);

app.use(express.urlencoded({extended: false}));
app.use(DependencyMiddleware);
app.use(AppRouter);
app.use(express.static(path.join(__dirname, "web/public")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App Started! Listening on Port ${PORT}, process.env.NODE_ENV = ${process.env.NODE_ENV}`);
});

module.exports = app;