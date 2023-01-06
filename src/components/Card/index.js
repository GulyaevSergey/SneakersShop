import cardStyles from "./Card.module.scss";

function Card(props) {
    const addCart = () => {
        alert(1);
    };

    return (
        <div className={cardStyles.card}>
            <div className={cardStyles.favorite}>
                <img src="/img/favorite-none.svg" alt="favorite" />
            </div>
            <img
                width={133}
                height={112}
                src={props.imageUrl}
                alt={props.name}
            />
            <h5>{props.name}</h5>
            <div className={cardStyles.cardInfo}>
                <div className={cardStyles.cardPrice}>
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button className={cardStyles.button} onClick={addCart}>
                    <img
                        width={11}
                        height={11}
                        src="/img/plus.svg"
                        alt="plus"
                    />
                </button>
            </div>
        </div>
    );
}

export default Card;
