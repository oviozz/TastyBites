import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";


function CategoryListsCard(props){

    return (
        <Link to={`/category/${props.title}`}>
            <li key={props.index} id={props.title} className={"category--item"}>
                <img className={"category--img"} src={props.image} alt={"props.alt"} />
                <h2 className={"item--title"}>{props.title}</h2>
            </li>
        </Link>
    )
}


export default CategoryListsCard;