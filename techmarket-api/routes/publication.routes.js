import { Router } from "express";

import authMiddleware from "../middlewares/authMiddleware.js";

import {

getPublications,
getPublication,
createPublication,
updatePublication,
deletePublication

} from "../controllers/publication.controller.js";

const router = Router();

router.get("/", getPublications);

router.get("/:id", getPublication);

router.post("/", authMiddleware, createPublication);

router.put("/:id", authMiddleware, updatePublication);

router.delete("/:id", authMiddleware, deletePublication);

export default router;