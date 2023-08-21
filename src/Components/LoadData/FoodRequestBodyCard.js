
import "./FoodRequestBodyCard.css";


function FoodRequestBodyCard(props) {
    return (
        <div className={"foodList--container"}>
            {props.title &&
                <h1 className={"foodlist--recipe-name"}>
                    <hr style={{opacity: 0.3}}></hr>
                    {props.title}
                    <hr style={{opacity: 0.3}}></hr>
                </h1>
            }

            <ul className={"foodlists--items-container"}>
                {props.dataItems}
            </ul>
        </div>
    );
}

export default FoodRequestBodyCard;
