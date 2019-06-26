import React, { Component } from 'react'
import HeaderImg from './images/Poke-Moon-Catcher.png'


export default class Header extends Component {
    render(){
        return(
        <div className="header">
            <img src={HeaderImg} alt="" />
        </div>
    );
    }
    
}


