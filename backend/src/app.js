import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import prisma from "./config/dbConfig.js";
import userRoutes from "./routes/userRoute.js";

const app = express();

try {
    await prisma.$connect();
    console.log("Database Connected Successfully ✅️");
} catch (error) {
    console.log("Database Connection Failed ❌️", error);
}

// Middleware
app.use(cors());
app.use(express.json());

// Route
try {
    app.get("/", (req, res) => {
        res.send("Welcome to Grocify Backend...🚀");
    });
} catch (error) {
    console.log(error.message);
}

try {
    app.use("/user", userRoutes)
} catch (error) {
    console.log(error.message);
}

export default app;
