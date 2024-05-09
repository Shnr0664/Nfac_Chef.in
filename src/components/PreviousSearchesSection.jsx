import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons"
import React, { useState } from 'react';
import Axios from 'axios'; 
export default function PrevSearches({ updateRecipeList }){
    const searches = ['pizza', 'burger', 'cookies', 'sushi', 'tacos', 'pasta', 'steak', 'ice cream', 'ramen', 'pancakes'];
    const APP_ID="345429f8";
    const APP_KEY="7d2ddfcb86b2def74f549f4702ef87ed";
    const[timeoutId, updateTimeOutId]=useState();

    const fetchRecipe = async(searchString)=>{
        const response = await Axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`);
       // console.log(response);
        updateRecipeList(response.data.hits);
    };
    
    const onTextChange=(event)=>{
        clearTimeout(timeoutId);
        const timeout = setTimeout(()=>fetchRecipe(event.target.value),500);
        updateTimeOutId(timeout);
    };
    return(
    <div className="previous-searches section">
        <h2> Previous Searches</h2>
        <div className="previous-searches-container">
            { searches.map((search,index)=>(<div key={index} style= {{animationDelay: index*.1+"s"}} className="search-item">
                {search}
            </div>))}

        </div>
        <div className = "search-box">
            <input type="text" placeholder="Search..." onChange={onTextChange}></input>
            <button className="button">
                <FontAwesomeIcon icon={faSearch}/>
            </button>
        </div>
    </div>
    )
}