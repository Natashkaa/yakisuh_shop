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
        const { getData, getTypes, getImages } = props;
        Promise.all([getTypes(), getData(), getImages()]).then(([resT, resD, resI]) => {
            setGoods(resD.map(item => {
                const { goodId, goodName, goodPrice, goodType, goodDescription } = item;
                if(goodType !== props.currentType) return;
                const imageLinkEntity = resI.find(img => img.goodId === goodId);
                const Link = imageLinkEntity ? "/img/" + imageLinkEntity.imageLink : "/no_img.png";
                const currentGoodImgs = resI.filter(img => img.goodId === goodId);
                return <CardComponent
                    key={goodId}
                    name={goodName}
                    price={goodPrice}
                    description={goodDescription}
                    images={currentGoodImgs} />
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
            {/* <div className="card">
                <div className="carousel">
                    <button className="carousel-btn prev"
                        type="button"
                        ref={btnPrevRef}
                        data-carousel-btn="prev"
                        onClick={() => {
                            const q = imageListRef;
                            let isActive1 = q.current.children[0].dataset.active;
                            let isActive2 = q.current.children[1].dataset.active;
                            q.current.children[1].dataset.active = isActive1 == "true" ? "true" : "false";
                            q.current.children[0].dataset.active = isActive2 == "false" ? "false" : "true";
                        }}>&#8656;</button>
                    <button className="carousel-btn next"
                        type="button"
                        ref={btnNextRef}
                        data-carousel-btn="next"
                        onClick={() => {
                            const q = imageListRef;
                            let isActive1 = q.current.children[0].dataset.active;
                            let isActive2 = q.current.children[1].dataset.active;
                            q.current.children[1].dataset.active = isActive1 == "true" ? "true" : "false";
                            q.current.children[0].dataset.active = isActive2 == "false" ? "false" : "true";
                        }}>&#8658;</button>
                    <ul ref={imageListRef}>
                        <li className="slide" data-active="true">
                            <img className="prof-icon" src="/img/beret2.jpg" alt="Avatar" />
                        </li>
                        <li className="slide" data-active="false">
                            <img className="prof-icon" src="/img/beret3.jpg" alt="Avatar" />
                        </li>
                    </ul>
                </div>
                <div className="container">
                    <div className="card-name">Beautiful Beret</div>
                    <div className="card-descr">If you want to look frenchy just buy it. 60% merinos / 40% acrylic Price: 40$</div>
                    <div className="btn-container">
                        <button className="add-btn" >Add</button>
                    </div>
                </div>
            </div> */}
            {/* <div className="card">
                <Image/>
                <div className="container">
                    <div className="card-name">Beautiful Beret</div>
                    <div className="card-descr">If you want to look frenchy just buy it. 60% merinos / 40% acrylic Price: 40$</div>
                    <div className="btn-container">
                        <button className="add-btn" >Add</button>
                    </div>
                </div>
            </div> */}
            {loader}
            {content}
        </div>
        
    )
}
export default Body;

const CardComponent = ({ id, name, price, description, images }) => {
    return (
        <div className="card">
            {/* <img className="prof-icon" src={imageLink} alt="Avatar" /> */}
            <Image data={images}/>
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