import "./card.css";

const Card = (props) => {
    let isContent = props.cardItem ? null : <div className="block-empty">Nothing in the list<hr></hr></div>;
    console.log(props.shopList)
    return(
        <div className="card-block">
                <div className="card-btn">
                    <img className="icon" src="/basket.png" alt="shop card icon" />
                    <span className="item-count">{props.cardItem}</span>
                </div>
                <div className="card-content">
                    <div className="card-title">SHOP LIST</div>
                    <hr></hr>
                    {isContent}
                    <ol className="card-list">
                        <li className="item-container"><span className="item-name">Warm Yellow Sweater SDf GDF sD</span><span className="item-price">2000 uah</span><button className="delete-item"><img className="remove-icon" src="/remove.png" alt="remove item from card icon"/></button></li>
                        <hr></hr>
                        <li className="item-container"><span className="item-name">Warm Yellow Sweater SDf GDF sD</span><span className="item-price">2000 uah</span><button className="delete-item"><img className="remove-icon" src="/remove.png" alt="remove item from card icon"/></button></li>
                        <hr></hr>
                        <li className="item-container"><span className="item-name">Warm Yellow Sweater SDf GDF sD</span><span className="item-price">2000 uah</span><button className="delete-item"><img className="remove-icon" src="/remove.png" alt="remove item from card icon"/></button></li>
                        <hr></hr>
                        <li className="item-container"><span className="item-name">Warm Yellow Sweater SDf GDF sD</span><span className="item-price">2000 uah</span><button className="delete-item"><img className="remove-icon" src="/remove.png" alt="remove item from card icon"/></button></li>
                        <hr></hr>
                        <li className="item-container"><span className="item-name">Warm Yellow Sweater SDf GDF sD</span><span className="item-price">2000 uah</span><button className="delete-item"><img className="remove-icon" src="/remove.png" alt="remove item from card icon"/></button></li>
                        <hr></hr>
                        <li className="item-container"><span className="item-name">Warm Yellow Sweater SDf GDF sD</span><span className="item-price">2000 uah</span><button className="delete-item"><img className="remove-icon" src="/remove.png" alt="remove item from card icon"/></button></li>
                        <hr></hr>
                    </ol>
                    <div className="total-container"><span>Total: </span><span>6000 uah</span></div>
                    <hr></hr>
                    <div className="order-btn-container"><button className="order-btn">Complete</button></div>
                </div>
            </div>
    )
}

export default Card;