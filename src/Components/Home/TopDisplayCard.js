

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./TopDisplayCard.css";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import PictureLoad from "../Layout/PictureLoad";


function TopDisplayCard() {

    const [mealRecipe, setMealRecipe] = useState({});


    useEffect(() => {

        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
            .then((response) => response.json())
            .then((data) => {

                setMealRecipe(data["meals"][0])
            });
    }, []);


    return (
        <Link to={`/detail/${mealRecipe.idMeal}`}>

            <div className={"display--card"}>
                <img
                    loading={"lazy"}
                    className={"topdisplay--img"}
                    src={mealRecipe.strMealThumb || "white.png"}
                    alt={mealRecipe.strMeal}
                    decoding={"async"}
                    width={"550px"}
                    height={"350px"}
                />

                <div className={"info--card"}>
                    <p className={"food--category"}>
                        <FontAwesomeIcon icon={faLocationDot} /> {mealRecipe.strArea}
                    </p>
                    <h1 className={"food--name"}>
                        {mealRecipe.strMeal ? mealRecipe.strMeal.slice(0, 23) : ""}
                    </h1>

                    <div className={"food--detail"}>
                        <h2 className={"label"}>Ingredients:</h2>
                        <ul className={"food--ingredients"}>
                            {mealRecipe.strIngredient1 && (
                                <li className={"ingredient--items"}>{mealRecipe.strIngredient1}</li>
                            )}
                            {mealRecipe.strIngredient2 && (
                                <li className={"ingredient--items"}>{mealRecipe.strIngredient2}</li>
                            )}
                            {mealRecipe.strIngredient3 && (
                                <li className={"ingredient--items"}>{mealRecipe.strIngredient3}</li>
                            )}
                            {mealRecipe.strIngredient4 && (
                                <li className={"ingredient--items"}>{mealRecipe.strIngredient4}</li>
                            )}
                            {mealRecipe.strIngredient5 && (
                                <li className={"ingredient--items"}>{mealRecipe.strIngredient5}</li>
                            )}

                        </ul>
                    </div>
                </div>
            </div>

        </Link>


    );
}

export default TopDisplayCard;
