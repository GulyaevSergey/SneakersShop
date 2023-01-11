import React, { useState } from "react";
import cardStyles from "./Card.module.scss";

function Card({ name, imageUrl, price, onFavorite, onPlus }) {
    const [isAdded, setIsAdded] = useState(true);
    const [isFavorite, setIsFavorite] = useState(true);

    const onClickPlus = () => {
        onPlus({ name, imageUrl, price });
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={cardStyles.card}>
            <div className={cardStyles.favorite}>
                <img
                    onClick={onClickFavorite}
                    src={
                        isFavorite
                            ? "/img/favorite-none.svg"
                            : "/img/favorite-like.svg"
                    }
                    alt="favorite"
                />
            </div>
            <img width={133} height={112} src={imageUrl} alt={name} />
            <h5>{name}</h5>
            <div className={cardStyles.cardInfo}>
                <div className={cardStyles.cardPrice}>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>

                <img
                    onClick={onClickPlus}
                    src={isAdded ? "/img/btn-plus.svg" : "/img/btn-checked.svg"}
                    alt="plus"
                />
            </div>
        </div>
    );
}

export default Card;
