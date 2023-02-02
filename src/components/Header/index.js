import headerStyles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../context";

function Header(props) {
    const { cartItems } = useContext(AppContext);
    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
    return (
        <header className={headerStyles.header}>
            <Link to="/">
                <div className={headerStyles.headerLeft}>
                    <img
                        width={40}
                        height={40}
                        src="img/logo.png"
                        alt="logo"
                    />
                    <div>
                        <h3 className={headerStyles.logoName}>Sneakers Shop</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>

            <ul className={headerStyles.headerRight}>
                <li onClick={props.onClickCart}>
                    <img
                        width={18}
                        height={18}
                        src="img/cart.svg"
                        alt="cart"
                    />
                    <span>{totalPrice} руб.</span>
                </li>
                <Link to="/favorites">
                    <li>
                        <img
                            width={18}
                            height={18}
                            src="img/favorite.svg"
                            alt="favorite"
                        />
                    </li>
                </Link>
                <Link to="/orders">
                    <li>
                        <img
                            width={18}
                            height={18}
                            src="img/user.svg"
                            alt="user"
                        />
                    </li>
                </Link>
            </ul>
        </header>
    );
}

export default Header;
