
import "./HomeBodyAlign.css"
function HomeBodyAlign(props){
    return (
        <div className={"main--display--container"}>
            {props.children}
        </div>
    )
}

export default HomeBodyAlign;