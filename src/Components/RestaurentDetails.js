import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const RestaurantDetails = ()=>{
    const {id} = useParams();
    const [val,setval]=useState([])
    useEffect(()=>{
       fetchData()
    },[])
  

    const fetchData = async ()=>{
        let data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.590230764605163&lng=77.44467213749886&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        const jsonadata = await data.json();
        console.log(jsonadata)
        setval(jsonadata?.data?.cards[0]?.card?.card?.info)

    }

    console.log(val)

    return(

        <>
        <h1>Under Construction </h1>
        </>
    )
}

export default RestaurantDetails;