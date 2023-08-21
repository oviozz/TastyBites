
import TopDisplayCard from "../Components/Home/TopDisplayCard";
import HomeBodyAlign from "../Components/Home/HomeBodyAlign";
import FoodRequestBody from "../Components/LoadData/FoodRequestBody";
function Home(){
    const healthyCategories = [
        "Chicken",
        "Seafood",
        "Vegan",
        "Vegetarian",
        "Breakfast"
    ];

    const deliciousCategories = [
        "Beef",
        "Pasta",
        "Dessert",
        "Lamb",
        "Pork"
    ];


    const delicious = deliciousCategories[Math.floor(Math.random() * deliciousCategories.length)];
    const healthy = healthyCategories[Math.floor(Math.random() * healthyCategories.length)];

    return (
        <div className={"main--container"}>
            <HomeBodyAlign>
                <TopDisplayCard />
                <FoodRequestBody title={"Healthy Meal"} category={healthy} limitCount={6} method={"filter"}/>
                <FoodRequestBody title={"Super Delicious"} category={delicious} limitCount={6} method={"filter"} />
            </HomeBodyAlign>
        </div>
    )

}

export default Home;