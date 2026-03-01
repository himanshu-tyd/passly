import { NextFunction, Request, Response } from "express";
import { checkToken } from "../lib/token";

const authToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  console.log('TOKEN', token)

  if (!token) {
    res.status(401).json({ success: false, message: 'Unauthorized' });
    return;
  }

  try {
    const payload = checkToken(token) as { id: string };

    (req as any).userId = payload.id;


    next();
  } catch (err) {


    console.log(err)

    res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
};

export default authToken;
