import { createContext, useState } from "react";

export const MarketContext = createContext();

export const MarketProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [products, setProducts] = useState([
        {
            id: 1,
            title: "RTX 4070",
            price: 520000,
            image: "https://picsum.photos/400/300?1",
            category: "Tarjetas Gráficas",
            description: "Tarjeta gráfica NVIDIA RTX 4070."
        },
        {
            id: 2,
            title: "Intel Core i7",
            price: 330000,
            image: "https://picsum.photos/400/300?2",
            category: "Procesadores",
            description: "Procesador Intel Core i7."
        },
        {
            id: 3,
            title: "Notebook ASUS TUF",
            price: 890000,
            image: "https://picsum.photos/400/300?3",
            category: "Notebooks",
            description: "Notebook Gamer."
        },
        {
            id: 4,
            title: "Monitor Samsung",
            price: 189990,
            image: "https://picsum.photos/400/300?4",
            category: "Monitores",
            description: "Monitor Samsung Full HD de 27 pulgadas."
        }
    ]);

    const [favorites, setFavorites] = useState([]);

    const login = (email) => {
        setUser({
            name: "Alvaro Mora",
            email
        });
    };

    const logout = () => {
        setUser(null);
    };

    const addFavorite = (product) => {

        const exists = favorites.find(
            item => item.id === product.id
        );

        if (!exists) {
            setFavorites([...favorites, product]);
        }

    };

    const removeFavorite = (id) => {

        setFavorites(
            favorites.filter(
                item => item.id !== id
            )
        );

    };

    return (
        <MarketContext.Provider
            value={{
                user,
                login,
                logout,
                products,
                setProducts,
                favorites,
                setFavorites,
                addFavorite,
                removeFavorite
            }}
        >
            {children}
        </MarketContext.Provider>
    );
};

export default MarketProvider;