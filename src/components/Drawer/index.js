import drawerStyles from "./Drawer.module.scss";

function Drawer() {
    return (
        <div className={drawerStyles.overlay}>
            <div className={drawerStyles.drawer}>
                <h2>
                    Корзина{" "}
                    <img
                        className={drawerStyles.removeBtn}
                        src="/img/btn-remove.svg"
                        alt="remove"
                    />
                </h2>
                <div className={drawerStyles.items}>
                    <div className={drawerStyles.cartItem}>
                        <img
                            className={drawerStyles.cartImage}
                            width={70}
                            height={70}
                            src="/img/sneakers/Jordan Air Jordan 11.jpg"
                            alt="Jordan Air Jordan 11"
                        />
                        <div className={drawerStyles.cartDesc}>
                            <p>Мужские кроссовки Jordan Air Jordan 11</p>
                            <b>12 990 руб.</b>
                        </div>
                        <img
                            className={drawerStyles.removeBtn}
                            src="/img/btn-remove.svg"
                            alt="remove"
                        />
                    </div>
                </div>
                <ul className={drawerStyles.cartFooter}>
                    <li className={drawerStyles.cartFooterPrice}>
                        <span>Итого:</span>
                        <div></div>
                        <b>12 990 руб.</b>
                    </li>
                    <li className={drawerStyles.cartFooterDelivery}>
                        <span>Доставка:</span>
                        <div></div>
                        <b>499 руб.</b>
                    </li>
                </ul>
                <button className={drawerStyles.greenButton}>
                    Оформить заказ
                    <img src="/img/arrow.svg" alt="Arrow" />
                </button>
            </div>
        </div>
    );
}

export default Drawer;
