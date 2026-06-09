import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../database/connection.js";

export const register = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        const hash = await bcrypt.hash(password, 10);

        const query = `
            INSERT INTO users(name,email,password)
            VALUES($1,$2,$3)
            RETURNING id,name,email
        `;

        const values = [name, email, hash];

        const result = await pool.query(query, values);

        res.status(201).json(result.rows[0]);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Error al registrar usuario"
        });

    }
};

export const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const result = await pool.query(
            "SELECT * FROM users WHERE email=$1",
            [email]
        );

        if (result.rows.length === 0) {

            return res.status(404).json({
                message: "Usuario no encontrado"
            });

        }

        const user = result.rows[0];

        const valid = await bcrypt.compare(
            password,
            user.password
        );

        if (!valid) {

            return res.status(401).json({
                message: "Contraseña incorrecta"
            });

        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "2h"
            }
        );

        res.json({
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Error al iniciar sesión"
        });

    }

};