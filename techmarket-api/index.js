import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import categoryRoutes from "./routes/category.routes.js";
import pool from "./database/connection.js";
import favoriteRoutes from "./routes/favorites.routes.js";
import authRoutes from "./routes/auth.routes.js";
import publicationRoutes from "./routes/publication.routes.js";

dotenv.config();

const app = express();

app.use("/api/favorites", favoriteRoutes);
app.use(cors());
app.use(express.json());
app.use("/api/categories", categoryRoutes);
app.get("/", (req, res) => {

    res.json({
        ok: true,
        message: "API TechMarket funcionando"
    });

});

app.use("/api/auth", authRoutes);
app.use("/api/publications", publicationRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);

});