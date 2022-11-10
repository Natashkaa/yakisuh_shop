import "./body.css";
import React, { useState, useEffect } from "react";
import Error from "../Error/error";
import Loader from "../Loader/loader";

const Body = (props) => {
    const [goods, setGoods] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const { getData, getTypes, getImages } = props;
        Promise.all([getTypes(), getData(), getImages()]).then(([resT, resD, resI]) => {
            setGoods(resD.map(item => {
                const { goodId, goodName, goodPrice, goodType, goodDescription } = item;

                const imageLinkEntity = resI.find(img => img.goodId === goodId);
                const Link = imageLinkEntity ? "/img/" + imageLinkEntity.imageLink : "/no_img.png";
                return <CardComponent
                            key={goodId}
                            name={goodName}
                            price={goodPrice}
                            description={goodDescription}
                            imageLink={Link} />
            }));
            setLoading(false);
        })
            .catch(er => {
                setError(er.message);
                setLoading(true)
            });
    }, [props]);
    const content = error === null ? goods : <Error msg={error} fontSize="40px" />;
    const loader = loading === true ? <Loader /> : null;
    return (
        <div className="content-body">
            {loader}
            {content}
        </div>
    )
}
export default Body;

const CardComponent = ({ id, name, price, description, imageLink }) => {
    return (
        <div className="card">
            <img className="prof-icon" src={imageLink} alt="Avatar" />
            <div className="container">
                <div className="card-name">{name}</div>
                <div className="card-descr">{description} Price: {price}</div>
                <div className="btn-container">
                    <button className="add-btn">Add</button>
                </div>
            </div>
        </div>
    )
}