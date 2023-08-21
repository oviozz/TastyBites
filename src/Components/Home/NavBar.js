
import "./NavBar.css"
import {faGrip, faHeart, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'

function NavBar(){

    return (
        <div className={"nav--container"}>

            <Link to={"/"}>
                <h1 className={"main--title"}>Tasty<span className={"style--title"}>Bites</span></h1>
            </Link>

            <ul className={"navbar--lists"}>
                <Link to={"/category"}>
                    <li className={"nav--items"}><FontAwesomeIcon icon={faGrip} /> Categories</li>
                </Link>

                <Link to={"/search"}>
                    <li className={"nav--items"}><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</li>
                </Link>

            </ul>
        </div>
    )


}


export default NavBar;