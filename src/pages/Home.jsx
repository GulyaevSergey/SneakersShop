import Card from "../components/Card";

function Home({items,
    searchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart, 
    isLoading
}) {
        const renderItems = () => {
            const filterItems = items.filter((item) =>item.name.toLowerCase().includes(searchValue.toLowerCase()))
            return(isLoading ? [...Array(10)] : filterItems)
                .map((item, index) => (
                    <Card
                        key={index}
                        onFavorite={(obj) => {
                            onAddToFavorite(obj);
                        }}
                        onPlus={(obj) => {
                            onAddToCart(obj);
                        }}
                        loading={isLoading}
                        {...item}
                    />
            ))
        }
    return (
        <div className="content">
            <div className="contentTitle">
                <h1>
                    {searchValue
                        ? `Поиск по запросу: "${searchValue}"`
                        : "Все кроссовки"}
                </h1>
                <div className="searchBlock">
                    <img src="public/img/search.svg" alt="search" />
                    <input
                        value={searchValue}
                        onChange={onChangeSearchInput}
                        type="text"
                        placeholder="Поиск..."
                    />
                </div>
            </div>

            <div className="sneakers">
                {renderItems()}
            </div>
        </div>
    )
}
export default Home;