import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Router from "./App/route/index.js";
import DatabaseConnect from "./App/config/dbConnect.js";

const app = express();

/**
 * Middleware
*/
app.use(cors());
app.use(bodyParser.json({ extended: false }));

/**
 * Routes
*/
app.use(Router);

/**
 * Establish Database Connection
*/
DatabaseConnect();

/**
 * start server
*/
app.listen(process.env.PORT || 3000, () => {
    console.log(`server is running on http://localhost:${process.env.PORT || 3000}`)
})