import React from "react";

const PokemonSelector = (props) =>{
  const options = props.pokemon.map((pokemonster, index) =>{
    return <option value={pokemonster.url} key={index}>{pokemonster.name}</option>
  })

  function handleChange(event) {
    props.handledPokemonSelected(event.target.value);
  }

  return (
    <select id="pokemon-selector" defaultValue = "default" onChange={handleChange}>
    <option disabled value = "default">Choose a Pokemon... </option>
    {options}
    </select>
  )

}

export default PokemonSelector;
