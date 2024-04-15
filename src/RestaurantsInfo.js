import { satellite } from "fontawesome"
import { useState ,useEffect } from "react"
import { json, useParams } from "react-router-dom"
import Shimmer from "./Shimmer";

const RestaurantsInfo = (props) => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
            );
            const json = await data.json();
            console.log("Response from API:", json);
            setResInfo(json.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    
    
    if (!resInfo) {
        return <div><Shimmer /></div>;
    }

    const { name, cuisines, costForTwo, avgRating, slaString } = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div>
            <h1>Praveen</h1>
            <h1>{name} - {avgRating}</h1>
            <p>{cuisines.join(",")} - {costForTwo}</p>
            <h3>{slaString}</h3>
            <h1>Menu</h1>
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - {"RS."}{item.card.info.price}</li>)}
            </ul>
        </div>
    );
};

export default RestaurantsInfo;