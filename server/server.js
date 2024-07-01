
import express from "express";
import cors from "cors";
import { connectDB } from "./db/config.js";
import leadRouter from "./routers/leads.router.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/leads", leadRouter);

app.listen(8000, async () => {
    try {

        console.log("listening on port 8000");

        await connectDB();

    } catch (error) {
        console.log('error:', error)
    }
})