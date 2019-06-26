import React from 'react'

export default function Encounter({pokeFound}){
var name = '';
var image = '';
var hp = '';
var def = '';
var att = '';
var spd = '';
var spdef = '';
var spattk = '';


if(pokeFound.length!=0){
    name = pokeFound.name;
    image = pokeFound.sprites.front_default;
     hp = pokeFound.stats[5].base_stat;
    def = pokeFound.stats[3].base_stat;
    att = pokeFound.stats[4].base_stat;
    spd = pokeFound.stats[0].base_stat;
    spdef = pokeFound.stats[1].base_stat;
    spattk = pokeFound.stats[2].base_stat;
    
} 
    return (
            <div className="encounter" id="encounter">
                <div className="title"></div>
                <div className="poke-card" id="poke-card" >
                    <div className="poke-img" id="poke-img">
                        <img id="imgCatch" src={`${image}`} height="200px" width="200px"  /> 
                        <p id="nameCatch" className="poke-name-size">{name}</p>
                        `;

                    </div>
                    <div className="poke-name" id="poke-stats1">
                        <p>HP: {hp}</p>
                        <p>DEFENSE: {def}</p>
                        <p>ATTACK: {att}</p>
                    </div>

                    <div className="poke-stats" id="poke-stats2">
                        <p>SPEED: {spd}</p>
                        <p>SPECIAL DEFENSE: {spdef}</p>
                        <p>SPECIAL ATTACK: {spattk}</p>
                    </div>

                    
                </div>
            </div>
        );

        
    

}



