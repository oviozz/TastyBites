


import {useEffect, useState} from "react";
import PictureLoad from "../Layout/PictureLoad";
import FoodRequestBodyCard from "./FoodRequestBodyCard";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCookieBite} from "@fortawesome/free-solid-svg-icons";



function FoodRequestBody(props){

    const [mealReq, setmealReq] = useState([]);
    const [searchMethod, setsearchMethod] = useState(props.method[0])
    const [error, seterror] = useState(false)


    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/${props.method}.php?${searchMethod === 'f' ? "c" : searchMethod}=${props.category}`)
            .then(response => response.json())
            .then(data => {

                const datas = data["meals"]

                if (datas === null) {
                    seterror(true);
                    setmealReq([]);
                } else {
                    seterror(false);
                    const shuffledData = datas.sort(() => Math.random() - 0.5);
                    const randomData = shuffledData.slice(0, props.limitCount);
                    setmealReq(randomData);
                }
            })
    }, [props.category, props.mealClickID])


    if (error) {
        return (
            <div className={"error--container"}>
                <FontAwesomeIcon className={"error--icon"} icon={faCookieBite} style={{color: "#e3f1ff",}} />
                <h1>No Results Found</h1>
            </div>

        );
    }

    const dataPass = mealReq.map((item, index) => {
        return (
            <li className={"foodlists--items"} key={item.idMeal} id={item.idMeal} style={{ animationDelay: `${index * 0.1}s` }}>
                <Link to={`/detail/${item.idMeal}`}>
                    <img loading={"lazy"} className={"foodlist--img"} src={item.strMealThumb} alt={props.alt} />
                    <h3 className={"foodlist--name"}>{item.strMeal.slice(0, 23)}</h3>
                </Link>
            </li>
        )
    })
    return <FoodRequestBodyCard dataItems={dataPass} title={props.title}/>

}


export default FoodRequestBody;
