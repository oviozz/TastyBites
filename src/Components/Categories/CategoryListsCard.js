

import CategoryListsCard from "./CategoryListsCard";
import "./CategoryList.css"
import FoodRequestBody from "../LoadData/FoodRequestBody";

function CategoryList(props){

    const categories = [
        {
            name: "Beef",
            image: "https://www.themealdb.com/images/category/beef.png"
        },
        {
            name: "Chicken",
            image: "https://www.themealdb.com/images/category/chicken.png"
        },
        {
            name: "Dessert",
            image: "https://www.themealdb.com/images/category/dessert.png"
        },
        {
            name: "Lamb",
            image: "https://www.themealdb.com/images/category/lamb.png"
        },
        {
            name: "Miscellaneous",
            image: "https://www.themealdb.com/images/category/miscellaneous.png"
        },
        {
            name: "Pasta",
            image: "https://www.themealdb.com/images/category/pasta.png"
        },
        {
            name: "Pork",
            image: "https://www.themealdb.com/images/category/pork.png"
        },
        {
            name: "Seafood",
            image: "https://www.themealdb.com/images/category/seafood.png"
        },
        {
            name: "Side",
            image: "https://www.themealdb.com/images/category/side.png"
        },
        {
            name: "Starter",
            image: "https://www.themealdb.com/images/category/starter.png"
        },
        {
            name: "Vegan",
            image: "https://www.themealdb.com/images/category/vegan.png"
        },
        {
            name: "Vegetarian",
            image: "https://www.themealdb.com/images/category/vegetarian.png"
        },
    ];

    const shuffledData = categories.sort(() => Math.random() - 0.5);

    const categoryData = shuffledData.map((item, index) => {
        return <CategoryListsCard index={index} image={item.image} title={item.name} styleIndex={{ animationDelay: `${index * 0.1}s` }}/>
    })

    const displaySelect = () => {
        if (props.itemTitle){
            return (
                <>
                    <h1 className={"component--pagetitle"}>{props.itemTitle}</h1>
                    <FoodRequestBody category={props.itemTitle} method={"filter"}/>
                </>
            )
        }else {
            return (
                <>
                    <h1 className={"component--pagetitle"}>Categories</h1>
                    <ul className={"category--container"}>
                        {categoryData}
                    </ul>
                </>
            )
        }
    }
    return displaySelect();
}

export default CategoryList;
