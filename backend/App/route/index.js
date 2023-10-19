import authRoutes from "../route/auth-route.js"
import express from "express";
const router = express.Router();

//rest of the routes
router.use("/auth", authRoutes);

//home routes
router.use("/", (req, res, next) => {
    res.status(200).send("server is up");
})

//if no route found
router.use((req, res, next) => {
    res.status(404).send("no routes found");
})

export default router;