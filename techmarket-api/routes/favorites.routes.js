import { Router } from "express";

import authMiddleware from "../middlewares/authMiddleware.js";

import {

addFavorite,
getFavorites,
deleteFavorite

} from "../controllers/favorite.controller.js";

const router = Router();

router.get("/", authMiddleware, getFavorites);

router.post("/", authMiddleware, addFavorite);

router.delete("/:id", authMiddleware, deleteFavorite);

export default router;