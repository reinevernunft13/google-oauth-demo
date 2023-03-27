import "dotenv/config";
import express, { Application, Request, Response } from 'express';

import initDB from "./database/db.connection";
import authRoutes from './routes/authRoutes';


const app: Application = express();

// starts DB
initDB();

app.set("view engine", "ejs");

//body parsing middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes);

app.get("/", (_req: Request, res: Response) => {
    return res.render("home");
});

app.listen(process.env.API_PORT, (): void => {
    console.log(`server running at http://localhost:${process.env.API_PORT}`);
});
