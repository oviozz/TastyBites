
import FoodRequestBody from "../LoadData/FoodRequestBody";
import {useState} from "react";
import SearchLoad from "./SearchLoad";


function SearchHandler(){

    const [searchContent, setsearchContent] = useState('');

    const handleUserSearch = (user_input) => {
        setsearchContent(user_input)

    }
    return (
        <>
            <SearchLoad onSearch={handleUserSearch} />
            <FoodRequestBody category={searchContent} method={"search"}/>
        </>
    )

}


export default SearchHandler;