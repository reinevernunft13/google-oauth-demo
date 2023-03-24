import "dotenv/config";
import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Test 
app.get('/ping', (_req: Request, res: Response) => {
    console.log("someone pinged here!! " + new Date().toLocaleDateString());
    res.send('pong');
})

app.listen(process.env.API_PORT, () => {
    console.log(`server running on port ${process.env.API_PORT}`);
});
