import { clerkMiddleware, getAuth } from "@clerk/express";
import type { Request, Response, NextFunction } from "express";

export const clerk = clerkMiddleware();

export function requireAuth(
  req: Request & { user?: any },
  res: Response,
  next: NextFunction
) {
  const { userId } = getAuth(req);
  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  // normalize like earlier code expected
  req.user = { claims: { sub: userId } };
  next();
}
