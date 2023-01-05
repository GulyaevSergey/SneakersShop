import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

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
                    <Card />
                    <div className="card">
                        <div className="favorite">
                            <img src="/img/favorite-none.svg" alt="favorite" />
                        </div>
                        <img
                            width={133}
                            height={112}
                            src="/img/sneakers/Nike Air Max 270.jpg"
                            alt="Nike blazer Mid Suede Green"
                        />
                        <h5>Мужские кроссовки Nike Air Max 270</h5>
                        <div className="cardInfo">
                            <div className="cardPrice">
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className="button">
                                <img
                                    width={11}
                                    height={11}
                                    src="/img/plus.svg"
                                    alt="plus"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="favorite">
                            <img src="/img/favorite-none.svg" alt="favorite" />
                        </div>
                        <img
                            width={133}
                            height={112}
                            src="/img/sneakers/Nike blazer Mid Suede White.jpg"
                            alt="Мужские кроссовки Nike blazer Mid Suede"
                        />
                        <h5>Мужские кроссовки Nike blazer Mid Suede</h5>
                        <div className="cardInfo">
                            <div className="cardPrice">
                                <span>Цена:</span>
                                <b>8 499 руб.</b>
                            </div>
                            <button className="button">
                                <img
                                    width={11}
                                    height={11}
                                    src="/img/plus.svg"
                                    alt="plus"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="favorite">
                            <img src="/img/favorite-none.svg" alt="favorite" />
                        </div>
                        <img
                            width={133}
                            height={112}
                            src="/img/sneakers/Puma X Aka Boku Future Rider.jpg"
                            alt="Puma X Aka Boku Future Rider"
                        />
                        <h5>Мужские кроссовки Puma X Aka Boku Future Rider</h5>
                        <div className="cardInfo">
                            <div className="cardPrice">
                                <span>Цена:</span>
                                <b>8 999 руб.</b>
                            </div>
                            <button className="button">
                                <img
                                    width={11}
                                    height={11}
                                    src="/img/plus.svg"
                                    alt="plus"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
