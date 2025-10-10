import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

mongoose
    .connect(process.env.MONGO_URL as string, {})
    .then((data) => {
        const PORT = process.env.PORT ?? 3003;
        console.log("MongoDB connection succeed", PORT);
    })
    .catch((err) => {
        console.log("Error on connection MongoDB: ", err);
    });
