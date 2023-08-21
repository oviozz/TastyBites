
import NavBar from "../Home/NavBar";
import "./Layout.css"


function Layout(props){
    return <div className={"main--container"}>
        <NavBar />
        <main>{props.children}</main>
    </div>
}

export default Layout;