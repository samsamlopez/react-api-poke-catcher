import React,{Component} from 'react';
import './App.css';
import { pokeApi } from './config/axiosConfig';
import Header from './component/Header'
import SelectPlace from './component/SelectPlace'

import Encounter from './component/Encounter'
import Catch from './component/Catch'
import Captured from './component/Captured'


export default class App extends Component {
    constructor(){
      super();
      
      this.state = {
        loading: true,
        regions: [],
        locations: [],
        areas: [],
        possibleEncounters: [],
        pokemon: [],
        capturedPokemon: [],
      };
    }

      componentDidMount() {
    pokeApi
      .get('region')
      .then(res => {
        return {
          regions: res.data.results,
        };
      })
      .then(customRes => {
        return pokeApi.get(`region/${customRes.regions[0].name}`).then(res => {
          customRes.locations = res.data.locations;
          return customRes;
        });
      })
      .then(customRes => {
        return pokeApi
          .get(`location/${customRes.locations[0].name}`)
          .then(res => {
            customRes.areas = res.data.areas;
            return customRes;
          });
      })
      .then(customRes => {
        return pokeApi
          .get(`location-area/${customRes.areas[0].name}`)
          .then(res => {
            customRes.possibleEncounters = res.data.pokemon_encounters;
            return customRes;
          });
      })
      .then(customRes => {
        this.setState({
          loading: false,
          regions: customRes.regions,
          locations: customRes.locations,
          areas: customRes.areas,
          possibleEncounters: customRes.possibleEncounters,
        });
      });
    }

    handleLocationChange = (url) => {
      return (
        pokeApi.get(url)
        .then(customRes => {
          

          if(customRes.data.locations){
            //console.log(customRes.data.locations);
            this.setState({
              loading: false,
              locations: customRes.data.locations,
              areas: customRes.data.areas,
            });
          }else if(customRes.data.areas){
            //console.log(customRes.data.areas);
            this.setState({
              loading: false,
              areas: customRes.data.areas,
              possibleEncounters: customRes.data.possibleEncounters,
            });
          }else{
            //console.log(customRes.data.pokemon_encounters);
            this.setState({
              loading: false,
              possibleEncounters: customRes.data.pokemon_encounters,
            });
            document.getElementById('explorePokemon').removeAttribute('hidden');
          }
          

        })
      )
    }

    getRandomPokemon = (pokemonName) => {
        // console.log(pokemonName)
      return (
        pokeApi.get(`pokemon/${pokemonName}`)
        .then(data => {
          // console.log(data.data.name);
          // console.log(data.data);
          
          this.setState({
            pokemon: data.data,
          })

        })
      )
    }

    pokemonCatch = (pokemonCapture) => {
      
        // console.log(pokemonCapture);
        var sanib = this.state.capturedPokemon.concat(pokemonCapture);
        if(this.state.capturedPokemon.length!==6){
          return this.setState({
            capturedPokemon: sanib
          })  
        }
        // console.log(this.state.capturedPokemon);
    }

    

    render(){
      return (
        <React.Fragment>
          <Header />
          <SelectPlace
            loading={this.state.loading}
            regions={this.state.regions}
            locations={this.state.locations}
            changeLocation={this.handleLocationChange}
            areas={this.state.areas}
            possibleEncounters={this.state.possibleEncounters}
            randomPokemon = {this.getRandomPokemon}
           />

           <div className="second-container">
            <Encounter pokeFound = {this.state.pokemon}/>
            <Catch 
              pokeFound = {this.state.pokemon}
              catchPoke = {this.pokemonCatch}
             />
            <Captured myPokemon={this.state.capturedPokemon}/>

          </div>
            
        </React.Fragment>
      );
    }

  
}

// export default App;
