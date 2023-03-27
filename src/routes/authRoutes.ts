import express, { Request, Response } from 'express';
const router = express.Router();

router.get('/login', (_req: Request, res: Response) => {
  // this will render login.ejs file
  res.render('login');
});

export default router;