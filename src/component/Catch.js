import React from 'react'
import BgPoke from './images/Pokemon-Minimal-Background-HD-Wallpaper.jpg'

function Capture({found, capture}){
        return(
            <button className="btnCapture" onClick={()=>{
                // console.log(found);
                capture(found);
            }} ></button>
        )
        
    }

export default function Catch ({pokeFound, catchPoke }) {

    //  console.log(pokeFound);
        return (
            <React.Fragment>
            <div className="catch">
                <img src={BgPoke}  width="100%" />
                <Capture found={pokeFound} capture={catchPoke} />
                <div className="boxRed"></div>
            </div>
            </React.Fragment>
        );
    

}



