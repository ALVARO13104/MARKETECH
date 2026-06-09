import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next) {

    const token = req.header("Authorization");

    if (!token) {

        return res.status(401).json({
            message: "Token requerido"
        });

    }

    try {

        const decoded = jwt.verify(
            token.replace("Bearer ", ""),
            process.env.JWT_SECRET
        );

        req.user = decoded;

        next();

    } catch {

        res.status(401).json({
            message: "Token inválido"
        });

    }

}