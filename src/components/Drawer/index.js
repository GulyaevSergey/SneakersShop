import drawerStyles from "./Drawer.module.scss";

function Drawer({ onClose, onRemove, items }) {
    return (
        <div className={drawerStyles.overlay}>
            <div className={drawerStyles.drawer}>
                <h2>
                    Корзина
                    <img
                        onClick={onClose}
                        className={drawerStyles.removeBtn}
                        src="/img/btn-remove.svg"
                        alt="close"
                    />
                </h2>

                {items.length > 0 ? (
                    <div>
                        <div className={drawerStyles.items}>
                            {items.map((obj) => (
                                <div className={drawerStyles.cartItem}>
                                    <img
                                        className={drawerStyles.cartImage}
                                        width={70}
                                        height={70}
                                        src={obj.imageUrl}
                                        alt={obj.name}
                                    />
                                    <div className={drawerStyles.cartDesc}>
                                        <p>{obj.name}</p>
                                        <b>{obj.price} руб.</b>
                                    </div>
                                    <img
                                        className={drawerStyles.removeBtn}
                                        src="/img/btn-remove.svg"
                                        alt="remove"
                                        onClick={() => onRemove(obj.id)}
                                    />
                                </div>
                            ))}
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
                ) : (
                    <div className={drawerStyles.drawerEmpty}>
                        <img src="/img/box.svg" alt="box" />
                        <b>Корзина пустая</b>
                        <span>
                            Добавьте хотя бы одну пару кроссовок, чтобы сделать
                            заказ
                        </span>
                        <button
                            onClick={onClose}
                            className={drawerStyles.greenButton}
                        >
                            Вернуться назад
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Drawer;
