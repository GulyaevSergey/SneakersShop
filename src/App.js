import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        axios
            .get("https://63b9b66f56043ab3c78d50d0.mockapi.io/items")
            .then((res) => setItems(res.data));
        axios
            .get("https://63b9b66f56043ab3c78d50d0.mockapi.io/cart")
            .then((res) => setCartItems(res.data));
    }, []);

    const onAddToCart = (obj) => {
        axios.post("https://63b9b66f56043ab3c78d50d0.mockapi.io/cart", obj);
        setCartItems((prev) => [...prev, obj]);
    };

    const onRemoveItem = (id) => {
        axios.delete(`https://63b9b66f56043ab3c78d50d0.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
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
            <div className="content">
                <div className="contentTitle">
                    <h1>
                        {searchValue
                            ? `Поиск по запросу: "${searchValue}"`
                            : "Все кроссовки"}
                    </h1>
                    <div className="searchBlock">
                        <img src="/img/search.svg" alt="search" />
                        <input
                            value={searchValue}
                            onChange={onChangeSearchInput}
                            type="text"
                            placeholder="Поиск..."
                        />
                    </div>
                </div>

                <div className="sneakers">
                    {items
                        .filter((item) =>
                            item.name
                                .toLowerCase()
                                .includes(searchValue.toLowerCase())
                        )
                        .map((item, index) => {
                            return (
                                <Card
                                    key={index}
                                    name={item.name}
                                    price={item.price}
                                    imageUrl={item.imageUrl}
                                    onFavorite={() =>
                                        console.log("Добавили в закладки")
                                    }
                                    onPlus={(obj) => {
                                        onAddToCart(obj);
                                    }}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default App;
