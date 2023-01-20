import "./body.css";
import React, { useState, useEffect, useRef } from "react";
import Error from "../Error/error";
import Loader from "../Loader/loader";
import Image from "../Image/image";

const Body = (props) => {
    const [goods, setGoods] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const btnNextRef = useRef();
    const btnPrevRef = useRef();
    const imageListRef = useRef();

    useEffect(() => {
        const { getData, getTypes, getImages, addItemToList } = props;
        Promise.all([getTypes(), getData(), getImages()]).then(([resT, resD, resI]) => {
            setGoods(resD.map(item => {
                const { goodId, goodName, goodPrice, goodType, goodDescription } = item;
                if(goodType !== props.currentType) return;
                //const imageLinkEntity = resI.find(img => img.goodId === goodId);
                //const Link = imageLinkEntity ? "/img/" + imageLinkEntity.imageLink : "/no_img.png";
                const currentGoodImgs = resI.filter(img => img.goodId === goodId);
                return <CardComponent
                    key={goodId}
                    id={goodId}
                    name={goodName}
                    price={goodPrice}
                    description={goodDescription}
                    images={currentGoodImgs} 
                    addToList={addItemToList}/>
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

const CardComponent = ({ id, name, price, description, images, addToList }) => {
    return (
        <div className="card">
            {/* <img className="prof-icon" src={imageLink} alt="Avatar" /> */}
            <Image data={images}/>
            <div className="container">
                <div className="card-name">{name}</div>
                <div className="card-descr">{description} Price: {price}</div>
                <div className="btn-container">
                    <button className="add-btn" onClick={() => addToList({id, name, price, description})}>Add</button>
                </div>
            </div>
        </div>
    )
}