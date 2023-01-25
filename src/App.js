import axios from "axios";
import { useState, useEffect, createContext } from "react";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./context";
import Orders from "./pages/Orders";

function App() {
    const [cartOpened, setCartOpened] = useState(false);
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            const cartResponse = await axios.get(
                "https://63b9b66f56043ab3c78d50d0.mockapi.io/cart"
            );
            const favoritesResponse = await axios.get(
                "https://63bee95d585bedcb36ba70f6.mockapi.io/favorite"
            );
            const itemResponse = await axios.get(
                "https://63b9b66f56043ab3c78d50d0.mockapi.io/items"
            );
            setIsLoading(false);
            setItems(itemResponse.data);
            setCartItems(cartResponse.data);
            setFavorites(favoritesResponse.data);
        }

        fetchData();
    }, []);

    const onAddToCart = (obj) => {
        try {
            if (cartItems.find((item) => item.id === obj.id)) {
                axios.delete(
                    `https://63b9b66f56043ab3c78d50d0.mockapi.io/cart/${obj.id}`
                );

                setCartItems((prev) =>
                    prev.filter((item) => Number(item.id) !== Number(obj.id))
                );
            } else {
                axios.post(
                    "https://63b9b66f56043ab3c78d50d0.mockapi.io/cart",
                    obj
                );
                setCartItems((prev) => [...prev, obj]);
            }
        } catch (error) {}
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

    const isItemAdded = (id) => {
        return cartItems.some((obj) => Number(obj.id) === Number(id));
    };

    return (
        <AppContext.Provider
            value={{
                favorites,
                cartItems,
                items,
                isItemAdded,
                searchValue,
                setSearchValue,
                onChangeSearchInput,
                onAddToFavorite,
                onAddToCart,
                isLoading,
            }}
        >
            <div className="wrapper">
                <div>
                    <Drawer
                        items={cartItems}
                        onClose={() => setCartOpened(false)}
                        onRemove={onRemoveItem}
                        opened={cartOpened}
                    />
                </div>

                <Header onClickCart={() => setCartOpened(true)} />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                favorites={favorites}
                                cartItems={cartItems}
                                items={items}
                                searchValue={searchValue}
                                setSearchValue={setSearchValue}
                                onChangeSearchInput={onChangeSearchInput}
                                isItemAdded={isItemAdded}
                                onAddToFavorite={onAddToFavorite}
                                onAddToCart={onAddToCart}
                                isLoading={isLoading}
                            />
                        }
                    ></Route>
                    <Route
                        path="/favorites"
                        element={
                            <Favorites onAddToFavorite={onAddToFavorite} />
                        }
                    ></Route>
                    <Route path="/orders" element={<Orders />}></Route>
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
