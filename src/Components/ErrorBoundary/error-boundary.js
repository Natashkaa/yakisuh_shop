import React, { Component } from "react";
import Error from "../Error/error";

export default class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = { hasError: false }
    }
    //для обновления состояния и рендеру запасного UI
    static getDerivedStateFromError(error){
        console.log("123 " + error)
        return { hasError: true }
    }
    //для логирования ошибки
    componentDidCatch(){
        //console.log(`component did catch ${error}, ${errorInfo}`);
        this.setState({hasError: true})
    }

    render(){
        if(this.state.hasError){
            return <Error msg="ERROR"/>
        }
        return this.props.children;
    }
}