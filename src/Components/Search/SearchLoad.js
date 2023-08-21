


import "./SearchLoad.css"
import {useRef} from "react";

function SearchLoad({onSearch}){

    const recipeSearchRef = useRef();

    function searchHandler(event){
        event.preventDefault();

        const user_input = recipeSearchRef.current.value;

        console.log(user_input)
        onSearch(user_input)
    }

    return (
            <>
                <form onSubmit={searchHandler} className={"search--container"}>
                    <h1 className={"search--title "}>Search results</h1>
                    <hr></hr>

                    <input
                        className={"search--input"}
                        placeholder={"Search Recipe"}
                        ref={recipeSearchRef}
                        onChange={searchHandler}
                    />
                </form>
            </>
    )
}




export default SearchLoad;