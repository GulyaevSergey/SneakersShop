function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/favorite-none.svg" alt="favorite" />
            </div>
            <img
                width={133}
                height={112}
                src="/img/sneakers/Nike_blazer_Mid Suede Green.jpg"
                alt="Nike blazer Mid Suede Green"
            />
            <h5>Мужские кроссовки Nike blazer Mid Suede</h5>
            <div className="cardInfo">
                <div className="cardPrice">
                    <span>Цена:</span>
                    <b>12 999 руб.</b>
                </div>
                <button className="button">
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
