
import CategoryList from "../Components/Categories/CategoryList";
import HomeBodyAlign from "../Components/Home/HomeBodyAlign";
import "../Components/Categories/CategoryList.css"
import {useParams} from "react-router-dom";
function Category(){

    const { title } = useParams();


    return (
        <HomeBodyAlign>
            <CategoryList itemTitle={title}/>
        </HomeBodyAlign>
    )


}


export default Category;