import { Request, Response, NextFunction, Router } from "express";
import { upload } from "./fileUpload.middleware";
const router = Router();

router.post(
  "/bikes/:id/image",
  upload.single("image"),
  (req: Request, res: Response) => {
    res.status(201).json({ message: "Image uploaded", file: req.file });
  },
);
router.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    return res.status(400).json({ error: err.message });
  }
  next();
});
