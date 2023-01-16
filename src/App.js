import axios from "axios";
import { useState, useEffect } from "react";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
    const [cartOpened, setCartOpened] = useState(false);
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        axios
            .get("https://63b9b66f56043ab3c78d50d0.mockapi.io/items")
            .then((res) => setItems(res.data));
        axios
            .get("https://63b9b66f56043ab3c78d50d0.mockapi.io/cart")
            .then((res) => setCartItems(res.data));
        axios
            .get("https://63bee95d585bedcb36ba70f6.mockapi.io/favorite")
            .then((res) => setFavorites(res.data));
    }, []);

    const onAddToCart = (obj) => {
        axios.post("https://63b9b66f56043ab3c78d50d0.mockapi.io/cart", obj);
        setCartItems((prev) => [...prev, obj]);
    };

    const onRemoveItem = (id) => {
        axios.delete(`https://63b9b66f56043ab3c78d50d0.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const onAddToFavorite = async (obj) => {
        try {
            if (favorites.find((favObj) => favObj.id === obj.id)) {
                axios.delete(
                    `https://63bee95d585bedcb36ba70f6.mockapi.io/favorite/${obj.id}`
                );
                setFavorites((prev) =>
                    prev.filter((item) => item.id !== obj.id)
                );
            } else {
                const { data } = await axios.post(
                    "https://63bee95d585bedcb36ba70f6.mockapi.io/favorite",
                    obj
                );
                setFavorites((prev) => [...prev, data]);
            }
        } catch (error) {
            alert("Не удалось добавить в Избранное");
        }
    };

    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <div className="wrapper">
            {cartOpened ? (
                <Drawer
                    items={cartItems}
                    onClose={() => setCartOpened(false)}
                    onRemove={onRemoveItem}
                />
            ) : null}

            <Header onClickCart={() => setCartOpened(true)} />

            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            items={items}
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            onChangeSearchInput={onChangeSearchInput}
                            onAddToFavorite={onAddToFavorite}
                            onAddToCart={onAddToCart}
                        />
                    }
                ></Route>
                <Route
                    path="/favorites"
                    element={
                        <Favorites
                            items={favorites}
                            onAddToFavorite={onAddToFavorite}
                        />
                    }
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
