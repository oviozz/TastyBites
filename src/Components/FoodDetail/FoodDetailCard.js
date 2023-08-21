
import React from "react";
import "./FoodDetailCard.css";
import FoodRequestBody from "../LoadData/FoodRequestBody";

function FoodDetailCard(props) {

    const { strMeal, strCategory, strArea, strInstructions, strYoutube, strTags } = props.detailData;

    const videoIdStartIndex = strYoutube.indexOf("v=") + 2;
    const videoId = strYoutube.substring(videoIdStartIndex);

    const ingredients = Array.from({ length: 9 }, (_, index) => props.detailData[`strIngredient${index + 1}`])
        .filter(ingredient => ingredient !== null && ingredient !== "");


    return (
        <>
            <div className="fooddetail--container">
                <h1 className="fooddetail--title">{strMeal}</h1>

                <div className="category--detail">
                    <h3 className={"category--dish"}>{strCategory}</h3>
                    <h3 className={"category--dish"}>{strArea}</h3>
                    {strTags && strTags.split(",").map((mealTag, index) => (
                        <h3 className={"category--dish"}
                        key={index}
                        >{mealTag}</h3>
                    ))}
                </div>

                <div className="detail--info">
                    <iframe
                        className="detail--video"
                        title="YouTube Video"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className={"detail--cover"}>

                    <div className="detail--instruction">
                        <h1 className="ingredient--title">Instruction:</h1>
                        <p className={"detail--paragraph"}>
                            {strInstructions}
                        </p>
                    </div>

                    <div className={"detail--ingredient"}>

                        <h1 className="ingredient--title">Ingredients:</h1>

                        <ul className={"ingredient--lists"}>
                            {ingredients.map((ingredient, index) => (
                                <li className={"ingre--item"} key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>

            <FoodRequestBody mealClickID={props.mealClickID} title={"Tasty Meals"} category={""} limitCount={3} method={"search"} />

        </>
    );
}

export default FoodDetailCard;


