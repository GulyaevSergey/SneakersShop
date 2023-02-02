import drawerStyles from "./Drawer.module.scss";
import Info from "../../info";
import { useContext, useState } from "react";
import AppContext from "../../context";
import axios from "axios";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [], opened }) {
    const { cartItems, setCartItems } = useContext(AppContext);
    const [orderId, setOrderId] = useState(null);
    const [isOrderComlete, setIsOrderComplete] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post(
                "https://63bee95d585bedcb36ba70f6.mockapi.io/orders",
                { items: cartItems }
            );
            axios.put("https://63b9b66f56043ab3c78d50d0.mockapi.io/cart", []);
            setOrderId(data.id);
            setIsOrderComplete(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete(
                    "https://63b9b66f56043ab3c78d50d0.mockapi.io/cart/" +
                        item.id
                );
                await delay(1000);
            }
        } catch (error) {
            alert("Не удалось оформить заказ, попробуй через 10 минут");
        }
        setIsLoading(false);
    };

    return (
        <div className={`${drawerStyles.overlay} ${opened ? drawerStyles.overlayVisible : ""}`}>
            <div className={drawerStyles.drawer}>
                <h2>
                    Корзина
                    <img
                        onClick={onClose}
                        className={drawerStyles.removeBtn}
                        src="img/btn-remove.svg"
                        alt="close"
                    />
                </h2>

                {items.length > 0 ? (
                    <div>
                        <div className={drawerStyles.items}>
                            {items.map((obj) => (
                                <div
                                    key={obj.id}
                                    className={drawerStyles.cartItem}
                                >
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
                                        src="img/btn-remove.svg"
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
                                <b>{totalPrice} руб.</b>
                            </li>
                            <li className={drawerStyles.cartFooterDelivery}>
                                <span>Доставка:</span>
                                <div></div>
                                <b>{totalPrice * 0.05} руб.</b>
                            </li>
                        </ul>
                        <button
                            disabled={isLoading}
                            onClick={onClickOrder}
                            className={drawerStyles.greenButton}
                        >
                            Оформить заказ
                            <img src="img/arrow.svg" alt="Arrow" />
                        </button>
                    </div>
                ) : (
                    <Info
                        title={
                            isOrderComlete ? "Заказ оформлен!" : "Корзина пуста"
                        }
                        image={
                            isOrderComlete
                                ? "img/order-complited.png"
                                : "img/box.svg"
                        }
                        description={
                            isOrderComlete
                                ? `Заказ ${orderId} оформлен и будет передан на доставку`
                                : "Ваша корзина пуста, пора приобуться"
                        }
                    />
                )}
            </div>
        </div>
    );
}

export default Drawer;
