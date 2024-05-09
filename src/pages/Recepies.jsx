import PrevSearches from "../components/PreviousSearchesSection";
import RecipeCard from "../components/RecipeCard";
import React, { useState } from 'react';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import Placeholder from "../components/Placeholder";

export default function Recepies(){
    const [recipeList, updateRecipeList] = useState([]);
    return (
    <div>
        <PrevSearches updateRecipeList={updateRecipeList}/>
        <div className="recipes-container">
            {recipeList.length ? recipeList.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe.recipe} url={recipe.url} />
                )): <Placeholder icon={faMugHot}></Placeholder>}
        </div>
    </div>)
}