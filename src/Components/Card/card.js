import React from "react";
import "./card.css";

const Card = (props) => {
    const isContent = props.shopList.length > 0 ? null : <div className="block-empty">Nothing in the list<hr></hr></div>;
    const listContent = props.shopList.map((i) => <ShopListItem key={i.id} item={i} removeItem={props.removeItemFromList} />)

    return (
        <div className="card-block">
            <div className="card-btn">
                <img className="icon" src="/basket.png" alt="shop card icon" />
                <span className="item-count">{props.shopListLength}</span>
            </div>
            <div className="card-content">
                <div className="card-title">SHOP LIST</div>
                <hr></hr>
                {isContent}
                <ol className="card-list">
                    {listContent}
                </ol>
                <div className="total-container"><span>Total: </span><span>{props.totalPrice} uah</span></div>
                <hr></hr>
                <div className="order-btn-container"><button className="order-btn">Complete</button></div>
            </div>
        </div>
    )
}
const ShopListItem = ({ item: {id, name, price,description }, removeItem}) => {
    return (
        <React.Fragment>
        <li key={id} className="item-container">
            <span className="item-name">{name}</span>
            <span className="item-price">{price} uah</span>
            <button className="delete-item" onClick={() => removeItem({id, name, price, description})}>
                <img className="remove-icon" src="/remove.png" alt="remove item from card icon" />
            </button>
        </li>
        <hr></hr>
        </React.Fragment>
    )
}

export default Card;