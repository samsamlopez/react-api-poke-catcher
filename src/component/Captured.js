import React from 'react'
import ImageX from './images/empty_circle-512.png'

export default function Captured({myPokemon}){
    var getName = [];
    var imgSrc = [];
    for(var i=0;i<6;i++){
        getName[i] = '';
        imgSrc[i] = ImageX;
    }
    
    // console.log(myPokemon);

    if(myPokemon.length!=0){
        var counter = 0;
        myPokemon.map(function(value){
            getName[counter] = value.name;
            imgSrc[counter] = value.sprites.front_default;
            counter++;
        })
    }
        return (

            <div className="captured">
                <div className="title" id="catchCount">CAPTURED ({myPokemon.length}/6)</div>
                <div className="upper-captured">
                    <div className="captured-box" id="captured-box1">
                        <img src={imgSrc[0]} width="70%" height="50%" alt="" id="pokecon1" />
                        <p>{`${getName[0]}`}</p>
                    </div>
                    <div className="captured-box" id="captured-box2">
                        <img src={imgSrc[1]} width="70%" height="50%" alt="" id="pokecon2" />
                        <p>{`${getName[1]}`}</p>
                    </div>
                    <div className="captured-box" id="captured-box3">
                        <img src={imgSrc[2]} width="70%" height="50%" alt="" id="pokecon3" />
                        <p>{`${getName[2]}`}</p>
                    </div>
                </div>
                <div className="lower-captured">
                    <div className="captured-box" id="captured-box4">
                        <img src={imgSrc[3]} width="70%" height="50%" alt="" id="pokecon4" />
                        <p>{`${getName[3]}`}</p>
                    </div>
                    <div className="captured-box" id="captured-box5">
                        <img src={imgSrc[4]} width="70%" height="50%" alt="" id="pokecon5" />
                        <p>{`${getName[4]}`}</p>
                    </div>
                    <div className="captured-box" id="captured-box6">
                        <img src={imgSrc[5]} width="70%" height="50%" alt="" id="pokecon6" />
                        <p>{`${getName[5]}`}</p>
                    </div>
                </div>
            </div>
        );
    

}



