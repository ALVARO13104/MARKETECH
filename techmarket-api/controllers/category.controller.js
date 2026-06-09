import pool from "../database/connection.js";

export const getCategories = async (req, res) => {

    try {

        const result = await pool.query(
            "SELECT * FROM categories ORDER BY id"
        );

        res.json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Error al obtener categorías"
        });

    }

};