function App() {
    return (
        <div className="wrapper">
            <header className="header">
                <div className="headerLeft">
                    <img
                        width={40}
                        height={40}
                        src="/img/logo.png"
                        alt="logo"
                    />
                    <div>
                        <h3 className="logoName">Sneakers Shop</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
                <ul className="headerRight">
                    <li>
                        <img
                            width={18}
                            height={18}
                            src="/img/cart.svg"
                            alt="cart"
                        />
                        <span>1205 руб.</span>
                    </li>
                    <li>
                        <img
                            width={18}
                            height={18}
                            src="/img/favorite.svg"
                            alt="favorite"
                        />
                    </li>
                    <li>
                        <img
                            width={18}
                            height={18}
                            src="/img/user.svg"
                            alt="user"
                        />
                    </li>
                </ul>
            </header>
            <div className="content">
                <h1>Все кроссовки</h1>

                <div className="sneakers">
                    <div className="card">
                        <img
                            width={133}
                            height={112}
                            src="/img/sneakers/Nike_blazer_Mid Suede Green.jpg"
                            alt="Nike blazer Mid Suede Green"
                        />
                        <h5>Мужские кроссовки Nike blazer Mid Suede</h5>
                        <div className="cartInfo">
                            <div className="cartPrice">
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
                        <img
                            width={133}
                            height={112}
                            src="/img/sneakers/Nike Air Max 270.jpg"
                            alt="Nike blazer Mid Suede Green"
                        />
                        <h5>Мужские кроссовки Nike Air Max 270</h5>
                        <div className="cartInfo">
                            <div className="cartPrice">
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
                        <img
                            width={143}
                            height={112}
                            src="/img/sneakers/Nike blazer Mid Suede White.jpg"
                            alt="Мужские кроссовки Nike blazer Mid Suede"
                        />
                        <h5>Мужские кроссовки Nike blazer Mid Suede</h5>
                        <div className="cartInfo">
                            <div className="cartPrice">
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
                        <img
                            width={143}
                            height={112}
                            src="/img/sneakers/Puma X Aka Boku Future Rider.jpg"
                            alt="Puma X Aka Boku Future Rider"
                        />
                        <h5>Мужские кроссовки Puma X Aka Boku Future Rider</h5>
                        <div className="cartInfo">
                            <div className="cartPrice">
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
