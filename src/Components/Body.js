import RestaurentCard from "./RetaurentCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [intialVal, newVal] = useState([]);
  const [seartchText, updatedSearchText] = useState("");
  const [filterList, setFilterList] = useState([])

  useEffect(() => {
    getResList();
  }, []);

  const getResList = async () => {
    const getData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5787229&lng=77.45357349999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const getTotalData = await getData.json();
    newVal(
      getTotalData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterList(getTotalData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants)
  };
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" value={seartchText} onChange={(e)=>{
            updatedSearchText(e.target.value);
          }}/>
          <button onClick={() => {
            // console.log(intialVal)
            debugger
           const filterRestaurant = intialVal.filter((res)=> res.info.name.toLowerCase().includes(seartchText.toLowerCase()));
           setFilterList(filterRestaurant);
          
          }}>Submit</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const val = intialVal.filter((res) => res.info.avgRating > 4);
            newVal(val);
          }}
          >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {filterList.map((res) => (
         <Link  key={res.info.id} to={"/restaurentDetails/" + res.info.id}><RestaurentCard  resData={res} /> </Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
