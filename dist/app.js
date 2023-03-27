"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const db_connection_1 = __importDefault(require("./database/db.connection"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const app = (0, express_1.default)();
// starts DB
(0, db_connection_1.default)();
app.set("view engine", "ejs");
//body parsing middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/auth", authRoutes_1.default);
app.get("/", (_req, res) => {
    return res.render("home");
});
app.listen(process.env.API_PORT, () => {
    console.log(`server running at http://localhost:${process.env.API_PORT}`);
});
