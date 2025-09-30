import dotenv from "dotenv";
import express from "express";
import connect from "./db/db.js";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import rabbitMq from "./service/rabbit.js";
dotenv.config();

const app = express();

connect();
rabbitMq.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", userRoutes);

export default app;
