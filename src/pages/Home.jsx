import Card from "../components/Card";

function Home({items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart}) {
    return (
        <div className="content">
            <div className="contentTitle">
                <h1>
                    {searchValue
                        ? `Поиск по запросу: "${searchValue}"`
                        : "Все кроссовки"}
                </h1>
                <div className="searchBlock">
                    <img src="/img/search.svg" alt="search" />
                    <input
                        value={searchValue}
                        onChange={onChangeSearchInput}
                        type="text"
                        placeholder="Поиск..."
                    />
                </div>
            </div>

            <div className="sneakers">
                {items
                    .filter((item) =>
                        item.name
                            .toLowerCase()
                            .includes(searchValue.toLowerCase())
                    )
                    .map((item, index) => {
                        return (
                            <Card
                                key={index}
                                onFavorite={(obj) => {
                                    onAddToFavorite(obj);
                                }}
                                onPlus={(obj) => {
                                    onAddToCart(obj);
                                }}
                                {...item}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}
export default Home;