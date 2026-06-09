import pool from "../database/connection.js";

/* =========================
   Obtener publicaciones
========================= */

export const getPublications = async (req, res) => {

    try {

        const query = `
            SELECT
                p.*,
                c.nombre AS categoria,
                u.name AS usuario
            FROM publications p
            JOIN categories c
                ON p.category_id = c.id
            JOIN users u
                ON p.user_id = u.id
            ORDER BY p.fecha_creacion DESC;
        `;

        const result = await pool.query(query);

        res.json(result.rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Error al obtener publicaciones"
        });

    }

};

/* =========================
   Obtener una publicación
========================= */

export const getPublication = async (req, res) => {

    try {

        const { id } = req.params;

        const result = await pool.query(

            "SELECT * FROM publications WHERE id=$1",

            [id]

        );

        if (!result.rows.length) {

            return res.status(404).json({
                message: "No encontrada"
            });

        }

        res.json(result.rows[0]);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Error"
        });

    }

};

/* =========================
   Crear publicación
========================= */

export const createPublication = async (req, res) => {

    try {

        const {

            titulo,
            descripcion,
            precio,
            imagen,
            region,
            ciudad,
            category_id

        } = req.body;

        const user_id = req.user.id;

        const query = `

        INSERT INTO publications
        (
            titulo,
            descripcion,
            precio,
            imagen,
            region,
            ciudad,
            fecha_creacion,
            user_id,
            category_id
        )

        VALUES
        ($1,$2,$3,$4,$5,$6,NOW(),$7,$8)

        RETURNING *

        `;

        const result = await pool.query(

            query,

            [
                titulo,
                descripcion,
                precio,
                imagen,
                region,
                ciudad,
                user_id,
                category_id
            ]

        );

        res.status(201).json(result.rows[0]);

    } catch (error) {

        console.error(error);

        res.status(500).json({

            message: "No fue posible crear"

        });

    }

};

/* =========================
   Actualizar
========================= */

export const updatePublication = async (req, res) => {

    try {

        const { id } = req.params;

        const {

            titulo,
            descripcion,
            precio,
            imagen,
            region,
            ciudad,
            category_id

        } = req.body;

        const query = `

        UPDATE publications

        SET

        titulo=$1,
        descripcion=$2,
        precio=$3,
        imagen=$4,
        region=$5,
        ciudad=$6,
        category_id=$7

        WHERE id=$8

        RETURNING *

        `;

        const result = await pool.query(

            query,

            [

                titulo,
                descripcion,
                precio,
                imagen,
                region,
                ciudad,
                category_id,
                id

            ]

        );

        res.json(result.rows[0]);

    } catch (error) {

        console.error(error);

        res.status(500).json({

            message: "No fue posible actualizar"

        });

    }

};

/* =========================
   Eliminar
========================= */

export const deletePublication = async (req, res) => {

    try {

        const { id } = req.params;

        await pool.query(

            "DELETE FROM publications WHERE id=$1",

            [id]

        );

        res.json({

            message: "Publicación eliminada"

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            message: "Error"

        });

    }

};
