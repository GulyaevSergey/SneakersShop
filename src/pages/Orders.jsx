import { useEffect } from "react";
import { useContext } from "react";
import Card from "../components/Card";
import AppContext from "../context";
import axios from "axios";
import { useState } from "react";

function Orders () {

    const {onAddToFavorite, onAddToCart} = useContext(AppContext)

    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(true);


    useEffect(()=>{
        (async ()=>{
            try {
                const {data} = await axios.get("https://63bee95d585bedcb36ba70f6.mockapi.io/orders")
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
                setIsLoading(false)
            } catch (error) {
                alert("Произошла ошибка при запросе заказов")
            }
        })()
    }, [])
    return (
        <div className="content">
            <div className="contentTitle">
                <h1>
                    Мои заказы
                </h1>
            </div>

            <div className="sneakers">
                {(isLoading ? [...Array(10)] : orders).map((item, index) => (
                    <Card                        
                        key={index}
                        loading={isLoading}
                        {...item}
                    />
                ))
                }
            </div>
        </div>
    )
}
export default Orders;
