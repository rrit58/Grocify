import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();    

const port=process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to Grocify Backend");
});

app.use("/api", )

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});