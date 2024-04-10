import { useState ,useEffect } from "react"
import { json, useParams } from "react-router-dom"

const RestaurantsInfo = () => {

    const [resInfo,setresInfo] = useState(null)

    useEffect( ()=> {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const json = await data.json();
        setresInfo(json.data)
        
    }

    console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,info)
    return(
        <div>
            <h1>Praveen</h1>
            <h1>praveen</h1>
            
        </div>
    )
}

export default RestaurantsInfo