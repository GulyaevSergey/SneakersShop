import AppContext from "./context";
import { useContext } from "react";
import drawerStyles from "./components/Drawer/Drawer.module.scss";

function Info({title, image, description} ) {
    const {setCartOpened} = useContext(AppContext)
    return ( 
    <div className={drawerStyles.drawerEmpty}>
        <img src={image} alt="box" />
        <b>{title}</b>
        <span>
            {description}
        </span>
        <button
            onClick={()=>setCartOpened(false)}
            className={drawerStyles.greenButton}
        >
            Вернуться назад
        </button>
    </div> );
}

export default Info;