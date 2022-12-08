import "./header.css";
import React, { useEffect, useState } from "react";
import Error from "../Error/error";

const Header = (props) => {
    const { getData } = props;
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getData().then(res => {
            setItems(res.map((item) => {
                const { typeId, typeName } = item;
                return (
                    <li key={typeId}
                        className="dropdown-item" onClick={() => props.changeType(typeId)}>{typeName}</li>
                );
            })
            );
        })
        .catch(err => {
            setError(err.message);
        });
    }, []);
    var content = error === null ? <ul className="dropdown-menu">{items}</ul> : <div className="dropdown-menu"><Error msg={error} fontSize="20px" /></div>
    return (
        <header className="header">
            <div className="menu-block">
                <div className="menu-btn">
                    <img className="icon" src="/menu.png" alt="menu icon" />
                </div>
                {content}
            </div>

            <div className="name-block">
                <div className="main-icon-block">
                    <img className="icon" src="/hand-made.png" alt="main icon" />
                </div>
                <div>YaKisuh</div>
            </div>

            <div className="card-block" type="button">
                <img className="icon" src="/basket.png" alt="shop card icon" />
            </div>

        </header>

    )
}

export default Header;