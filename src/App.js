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
            try {
                const [cartResponse, favoritesResponse, itemResponse] =
                    await Promise.all([
                        axios.get(
                            "https://63b9b66f56043ab3c78d50d0.mockapi.io/cart"
                        ),
                        axios.get(
                            "https://63bee95d585bedcb36ba70f6.mockapi.io/favorite"
                        ),
                        axios.get(
                            "https://63b9b66f56043ab3c78d50d0.mockapi.io/items"
                        ),
                    ]);

                setIsLoading(true);
                setIsLoading(false);
                setItems(itemResponse.data);
                setCartItems(cartResponse.data);
                setFavorites(favoritesResponse.data);
            } catch (error) {
                alert("Ошибка при запоросе данных. Повторите позже");
                console.error(error);
            }
        }

        fetchData();
    }, []);

    const onAddToCart = async (obj) => {
        try {
            const findItem = cartItems.find(
                (item) => Number(item.parentId) === Number(obj.id)
            );
            if (findItem) {
                await axios.delete(
                    `https://63b9b66f56043ab3c78d50d0.mockapi.io/cart/${findItem.id}`
                );

                setCartItems((prev) =>
                    prev.filter(
                        (item) => Number(item.parentId) !== Number(obj.id)
                    )
                );
            } else {
                setCartItems((prev) => [...prev, obj]);
                const { data } = await axios.post(
                    "https://63b9b66f56043ab3c78d50d0.mockapi.io/cart",
                    obj
                );
                setCartItems((prev) =>
                    prev.map((item) => {
                        if (item.parentId === data.parentId) {
                            return {
                                ...item,
                                id: data.id,
                            };
                        }
                        return item;
                    })
                );
            }
        } catch (error) {
            alert(
                "Не удалось добавить в корзину. Повторите попытку через 5 минут"
            );
            console.error(error);
        }
    };

    const onRemoveItem = (id) => {
        try {
            axios.delete(
                `https://63b9b66f56043ab3c78d50d0.mockapi.io/cart/${id}`
            );
            setCartItems((prev) =>
                prev.filter((item) => Number(item.id) !== Number(id))
            );
        } catch (error) {
            alert("Ошибка при удалении товара из корзины");
            console.error(error);
        }
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
            console.error(error);
        }
    };

    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value);
    };

    const isItemAdded = (id) => {
        return cartItems.some((obj) => Number(obj.parentId) === Number(id));
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
                        path=""
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
                        path="favorites"
                        element={
                            <Favorites onAddToFavorite={onAddToFavorite} />
                        }
                    ></Route>
                    <Route path="orders" element={<Orders />}></Route>
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
