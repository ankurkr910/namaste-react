import React from "react";
import {CDN_URL} from "../Const/constant"
const RestaurentCard = (props) => {

    const {resData} =props;
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = resData.info;
    return (
      <div className="res-card">
        
          <img className="res-logo" src={ CDN_URL+ cloudinaryImageId}/>
        
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{avgRating}</h5>
        <h5>{costForTwo}</h5>
        
  
      </div>
    );
  };

  export default RestaurentCard;