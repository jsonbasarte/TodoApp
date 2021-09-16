import "colors";
import dotenv from "dotenv";
import express, { Application, Request, Response } from "express";
import Routes from './routes/index';

// Load env vars
dotenv.config({ path: "./config/config.env" });

const app: Application = express();
const PORT = process.env.PORT;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize Routes
app.use("/api/todo", Routes.Todo);



try {
    app.listen(PORT, (): void => {
        console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow);
    });
} catch (error: any) {
    console.error(`Error occured: ${error.message}`);
}