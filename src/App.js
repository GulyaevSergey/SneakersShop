import { useContext, useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartIrems] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);

    useEffect(() => {
        fetch("https://63b9b66f56043ab3c78d50d0.mockapi.io/items")
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setItems(json);
            });
    }, []);

    const onAddToCart = (obj) => {
        setCartIrems((prev) => [...prev, obj]);
    };

    return (
        <div className="wrapper">
            {cartOpened ? (
                <Drawer
                    items={cartItems}
                    onClose={() => setCartOpened(false)}
                />
            ) : null}
            <Header onClickCart={() => setCartOpened(true)} />
            <div className="content">
                <div className="contentTitle">
                    <h1>Все кроссовки</h1>
                    <div className="searchBlock">
                        <img src="/img/search.svg" alt="search" />
                        <input type="text" placeholder="Поиск..." />
                    </div>
                </div>

                <div className="sneakers">
                    {items.map((item) => {
                        return (
                            <Card
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
