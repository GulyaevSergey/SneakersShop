import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const menSneakers = "Мужские Кроссовки";

const arr = [
    {
        name: menSneakers + " " + "Nike blazer Mid Suede",
        price: 12990,
        imageUrl: "/img/sneakers/Nike_blazer_Mid Suede Green.jpg",
    },
    {
        name: menSneakers + " " + "Nike Air Max 270",
        price: 12990,
        imageUrl: "/img/sneakers/Nike Air Max 270.jpg",
    },
    {
        name: menSneakers + " " + "Nike Blazer Mid Suede",
        price: 8499,
        imageUrl: "/img/sneakers/Nike Blazer Mid Suede White.jpg",
    },
    {
        name: menSneakers + " " + "Puma X Aka Boku Future Rider",
        price: 15990,
        imageUrl: "/img/sneakers/Puma X Aka Boku Future Rider.jpg",
    },
];

function App() {
    return (
        <div className="wrapper">
            <Drawer />
            <Header />
            <div className="content">
                <div className="contentTitle">
                    <h1>Все кроссовки</h1>
                    <div className="searchBlock">
                        <img src="/img/search.svg" alt="search" />
                        <input type="text" placeholder="Поиск..." />
                    </div>
                </div>

                <div className="sneakers">
                    {arr.map((obj) => {
                        return (
                            <Card
                                name={obj.name}
                                price={obj.price}
                                imageUrl={obj.imageUrl}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
