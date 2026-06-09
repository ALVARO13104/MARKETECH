import pool from "../database/connection.js";

export const addFavorite = async (req, res) => {

    try {

        const user_id = req.user.id;
        const { publication_id } = req.body;

        const result = await pool.query(

            `INSERT INTO favorites(user_id,publication_id)
             VALUES($1,$2)
             RETURNING *`,

            [user_id, publication_id]

        );

        res.status(201).json(result.rows[0]);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Error"
        });

    }

};

export const getFavorites = async (req, res) => {

    try {

        const result = await pool.query(

            `SELECT p.*

            FROM favorites f

            JOIN publications p

            ON p.id=f.publication_id

            WHERE f.user_id=$1`,

            [req.user.id]

        );

        res.json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Error"
        });

    }

};

export const deleteFavorite = async (req, res) => {

    try {

        await pool.query(

            "DELETE FROM favorites WHERE publication_id=$1 AND user_id=$2",

            [req.params.id, req.user.id]

        );

        res.json({

            message: "Favorito eliminado"

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            message: "Error"

        });

    }

};