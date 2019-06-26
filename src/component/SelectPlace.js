import React from 'react'




function PokeSelector({ handleChange, items, name }) {
  return (
    <select
      onClick={e => handleChange(e.target.value)}
      
      disabled={!items.length}
    >
    
    <option>--Select {name}--</option>
      {items.map(item => (
        <option key={item.name} value={item.url}>
          {item.name}
        </option>
      ))}
    </select>
  );
}

            


function Explore({pokemon, getRandomPokemon}){

    return(
        <button className="btn-explore" onClick={function(){
            var randomNumber = Math.floor(Math.random()*(pokemon.length));
            var pokemonName = pokemon[randomNumber].pokemon.name;
            getRandomPokemon(pokemonName);
            //    console.log(pokemonName);
        }
        } id ="explorePokemon" hidden >Explore</button>
    )
}


export default function SelectPlace ({
  loading,
  regions = [],
  locations = [],
  changeLocation,
  areas = [],
  possibleEncounters = [],
  randomPokemon,
}) {
    //    console.log(regions);
    //    console.log(areas);
    //    console.log(locations)
    // console.log(possibleEncounters);
    
        return(
            <div className="select-place">

            <div className="region">
                Region: <PokeSelector handleChange={changeLocation} items={regions} name='Region' />
            </div>
            <div className="location">
                Location: <PokeSelector handleChange={changeLocation} items={locations} name='Locations' />

                
            </div>
            <div className="area">
                Area: <PokeSelector handleChange={changeLocation} items={areas} name='Areas' />
                    
                
                
                <select name="pokemonName"  id="pokemonName" hidden>

                </select>

            </div>
            <Explore pokemon = {possibleEncounters} getRandomPokemon={randomPokemon}/>
            
            <div className="alert-text hide" id="alert-text">No Pokemon in this area!</div>
            </div>

 
    );
    
    
}