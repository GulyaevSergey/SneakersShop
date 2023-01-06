import headerStyles from "./Header.module.scss";

function Header() {
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.headerLeft}>
                <img width={40} height={40} src="/img/logo.png" alt="logo" />
                <div>
                    <h3 className={headerStyles.logoName}>Sneakers Shop</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className={headerStyles.headerRight}>
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
    );
}

export default Header;
