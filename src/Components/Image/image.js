import React, { Component, useRef } from "react";
import "./image.css";

const Image = (props) => {
    const btnPrevRef = useRef();
    const btnNextRef = useRef();
    const imageListRef = useRef();
    const imgs = props.data;
    let content;
    if (imgs.length === 0) {
        content = <li className="slide" data-active="true">
            <img className="prof-icon" src="/no_img.png" alt="Avatar" />
        </li>
    }
    else {
        content = imgs.map(i => {
        const Path = i.imageLink ? `/img/${i.imageLink}` : "/no_img.png";
        if (imgs.indexOf(i) === 0) {
            return <li key={imgs.indexOf(i)} className="slide" data-active="true">
                <img className="prof-icon" src={Path} alt="Avatar" />
            </li>
        }
        return <li key={imgs.indexOf(i)} className="slide" data-active="false">
            <img className="prof-icon" src={Path} alt="Avatar" />
        </li>
    });
}
    return (
        <div className="carousel">
            <button className="carousel-btn prev"
                type="button"
                ref={btnPrevRef}
                data-carousel-btn="prev"
                onClick={() => {
                    const q = imageListRef;
                    const childrenCount = q.current.childElementCount;//2
                    const children = Array.from(q.current.childNodes);
                    const currentActive = children.findIndex(ch => ch.dataset.active === "true");//0
                    const newIndex = currentActive - 1 <= 0 ? childrenCount - 1 : currentActive - 1;
                    q.current.children[currentActive].dataset.active = false;
                    q.current.children[newIndex].dataset.active = true;
                }}>&#8656;</button>
            <button className="carousel-btn next"
                type="button"
                ref={btnNextRef}
                data-carousel-btn="next"
                onClick={() => {
                    const q = imageListRef;
                    const childrenCount = q.current.childElementCount;//2
                    const children = Array.from(q.current.childNodes);
                    const currentActive = children.findIndex(ch => ch.dataset.active === "true");//0
                    const newIndex = currentActive + 1 === childrenCount ? 0 : currentActive + 1;
                    q.current.children[currentActive].dataset.active = false;
                    q.current.children[newIndex].dataset.active = true;
                    // let isActive1 = q.current.children[0].dataset.active;
                    // let isActive2 = q.current.children[1].dataset.active;
                    // q.current.children[1].dataset.active = isActive1 == "true" ? "true" : "false";
                    // q.current.children[0].dataset.active = isActive2 == "false" ? "false" : "true";
                }}>&#8658;</button>
            <ul ref={imageListRef}>
                {content}
            </ul>
        </div>
    )
}
export default Image;
