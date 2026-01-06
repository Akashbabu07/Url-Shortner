import express from "express";
import { createShortUrl, redirectUrl, getUserUrls } from "../controllers/conrol.js";
import authMiddleware from "../middleware/authmiddleware.js";
import { register, login } from "../controllers/authcontroler.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.post("/shorten",authMiddleware, createShortUrl);
router.get("/my-urls",authMiddleware, getUserUrls);
router.get("/:code", redirectUrl);


export default router;
