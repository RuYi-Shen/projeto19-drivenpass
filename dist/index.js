import cors from "cors";
import dotenv from "dotenv";
import express, { json } from "express";
import "express-async-errors";
import router from "./routers/index.js";
import errorHandler from "./middlewares/errorHandlerMiddleware.js";
dotenv.config();
var app = express();
app.use(json());
app.use(cors());
app.use(router);
app.use(errorHandler);
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Server up and running on port ".concat(port));
});
