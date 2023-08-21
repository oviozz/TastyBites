
import FoodRequestBody from "../LoadData/FoodRequestBody";
import React, {useEffect, useState} from "react";
import FoodDetailCard from "./FoodDetailCard";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCookieBite} from "@fortawesome/free-solid-svg-icons";


function FoodDetailsFetch(props){

    const [mealIDData, setmealIDData] = useState();
    const [error, seterror] = useState(false)

    useEffect(() => {

        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.id}`)
            .then(response => response.json())
            .then(data => {

                const mealData = data["meals"];

                if (mealData == null){
                    seterror(true)
                }else {
                    setmealIDData(mealData[0])
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }
            })

    }, [props.id])

    if (error) {
        return (
            <div className={"error--container"}>
                <FontAwesomeIcon className={"error--icon"} icon={faCookieBite} style={{color: "#e3f1ff",}} />
                <h1>No Results Found</h1>
            </div>

        );
    }

    return (
        <>
            {mealIDData && <FoodDetailCard mealClickID={props.id} detailData={mealIDData} />} {/* Render FoodDetailCard only if mealIDData is defined */}
        </>
    )



}



export default FoodDetailsFetch;