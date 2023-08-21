
import HomeBodyAlign from "../Components/Home/HomeBodyAlign";
import FoodDetailsFetch from "../Components/FoodDetail/FoodDetailsFetch";
import { useParams } from 'react-router-dom';


function Details(){

    const { id } = useParams();

    return (
        <HomeBodyAlign>
            <FoodDetailsFetch id={id}/>
        </HomeBodyAlign>
    )
}

export default Details;