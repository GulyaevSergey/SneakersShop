import React, { useState } from "react";
import cardStyles from "./Card.module.scss";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";
import { useContext } from "react";

function Card({
    id,
    name,
    imageUrl,
    price,
    onFavorite,
    onPlus,
    favorited = false,
    loading = false,
}) {
    const obj = { id, parentId: id, name, imageUrl, price };
    const { isItemAdded } = useContext(AppContext);
    const [isFavorite, setIsFavorite] = useState(!favorited);

    const onClickPlus = () => {
        onPlus(obj);
    };

    const onClickFavorite = () => {
        onFavorite(obj);
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={cardStyles.card}>
            {loading ? (
                <ContentLoader
                    speed={2}
                    width={150}
                    height={200}
                    viewBox="0 0 150 200"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
                    <rect x="0" y="107" rx="3" ry="3" width="150" height="15" />
                    <rect x="0" y="126" rx="3" ry="3" width="93" height="15" />
                    <rect x="0" y="163" rx="8" ry="8" width="80" height="24" />
                    <rect
                        x="118"
                        y="155"
                        rx="8"
                        ry="8"
                        width="32"
                        height="32"
                    />
                </ContentLoader>
            ) : (
                <>
                    <div className={cardStyles.favorite}>
                        {onFavorite && (
                            <img
                                onClick={onClickFavorite}
                                src={
                                    isFavorite
                                        ? "img/favorite-none.svg"
                                        : "img/favorite-like.svg"
                                }
                                alt="favorite"
                            />
                        )}
                    </div>
                    <img width={133} height={112} src={imageUrl} alt={name} />
                    <h5>{name}</h5>
                    <div className={cardStyles.cardInfo}>
                        <div className={cardStyles.cardPrice}>
                            <span>Цена:</span>
                            <b>{price} руб.</b>
                        </div>

                        {onPlus && (
                            <img
                                onClick={onClickPlus}
                                src={
                                    isItemAdded(id)
                                        ? "img/btn-checked.svg"
                                        : "img/btn-plus.svg"
                                }
                                alt="plus"
                            />
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default Card;
