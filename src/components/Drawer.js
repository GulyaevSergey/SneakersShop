function Drawer() {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2>
                    Корзина{" "}
                    <img
                        className="removeBtn"
                        src="/img/btn-remove.svg"
                        alt="remove"
                    />
                </h2>
                <div className="items">
                    <div className="cartItem">
                        <img
                            className="cartImage"
                            width={70}
                            height={70}
                            src="/img/sneakers/Jordan Air Jordan 11.jpg"
                            alt="Jordan Air Jordan 11"
                        />
                        <div className="cartDesc">
                            <p>Мужские кроссовки Jordan Air Jordan 11</p>
                            <b>12 990 руб.</b>
                        </div>
                        <img
                            className="removeBtn"
                            src="/img/btn-remove.svg"
                            alt="remove"
                        />
                    </div>
                    <div className="cartItem">
                        <img
                            className="cartImage"
                            width={70}
                            height={70}
                            src="/img/sneakers/Nike Kyrie Flytrap IV.jpg"
                            alt="Nike Kyrie Flytrap IV"
                        />
                        <div className="cartDesc">
                            <p>Мужские кроссовки Nike Kyrie Flytrap IV</p>
                            <b>8 990 руб.</b>
                        </div>
                        <img
                            className="removeBtn"
                            src="/img/btn-remove.svg"
                            alt="remove"
                        />
                    </div>
                </div>
                <ul className="cartFooter">
                    <li className="cartFooterPrice">
                        <span>Итого:</span>
                        <div></div>
                        <b>12 990 руб.</b>
                    </li>
                    <li className="cartFooterDelivery">
                        <span>Доставка:</span>
                        <div></div>
                        <b>499 руб.</b>
                    </li>
                </ul>
                <button className="greenButton">
                    Оформить заказ
                    <img src="/img/arrow.svg" alt="Arrow" />
                </button>
            </div>
        </div>
    );
}

export default Drawer;
