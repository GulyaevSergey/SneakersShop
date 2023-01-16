import Card from "../components/Card";

function Favorites({
    items, onAddToFavorite
}) {
    return (
        <div className="content">
            <div className="contentTitle">
                <h1>
                    Закладки
                </h1>
            </div>

            <div className="sneakers">
            {items
                    .map((item, index) => {
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