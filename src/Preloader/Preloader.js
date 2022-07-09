import React, { Component } from 'react';
import './preloader.css';


export default class Preloader extends Component{
    constructor(props){
        super(props);
        this.viewRef = React.createRef();
    }
    render(){
        return(
            <div ref={this.viewRef} className="preloader">
                <div className="preloader__image_animate"></div>
            </div>
        );
    }

    // componentWillUnmount(){
    //    this.viewRef.current.style.opacity = 0;
    // }
}