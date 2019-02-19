import React, {Component} from 'react';
import PokemonSelector from "../components/PokemonSelector";
import PokemonDetail from "../components/PokemonDetail";

class PokemonBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemon: [],
      currentPokemon: null
    };
    this.handledPokemonSelected = this.handledPokemonSelected.bind(this)
  }

  componentDidMount(){
   const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
   const request = new XMLHttpRequest();
   request.open('GET', url);

   request.addEventListener("load", () => {
     if (request.status !== 200) return;
     const jsonString = request.responseText;
     const data = JSON.parse(jsonString);
     this.setState({pokemon: data.results})
   });

   request.send();
 }

newAPIRequest(url){
  const request = new XMLHttpRequest();
  request.open('GET', url);

  request.addEventListener("load", () => {
    if (request.status !== 200) return;
    const jsonString = request.responseText;
    const data = JSON.parse(jsonString);
    this.setState({currentPokemon: data})
  });

  request.send();
}

 handledPokemonSelected(url){
   this.newAPIRequest(url)
 }

 render(){
   return(
     <div className="pokemon-box">
      <h2>PokemonBox</h2>
      <PokemonSelector
      pokemon={this.state.pokemon}
      handledPokemonSelected={this.handledPokemonSelected}/>
      <PokemonDetail currentPokemon={this.state.currentPokemon}/>
     </div>
   )
 }
}

export default PokemonBox;
