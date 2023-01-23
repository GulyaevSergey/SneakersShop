import { useContext } from "react";
import Card from "../components/Card";
import AppContext from "../context";

function Favorites({
    onAddToFavorite
}) {
    const {favorites} = useContext(AppContext)
    return (
        <div className="content">
            <div className="contentTitle">
                <h1>
                    Закладки
                </h1>
            </div>

            <div className="sneakers">
            {favorites.map((item, index) => {
                        return (
                            <Card
                            key={index}
                            favorited={true}
                            onFavorite={onAddToFavorite}
                            {...item}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}
export default Favorites;