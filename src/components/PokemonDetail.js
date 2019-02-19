import React from 'react';

const PokemonDetail = ({currentPokemon}) => {
  if (!currentPokemon) return null;

  const moves = currentPokemon.moves.filter((move) => {
    return move.version_group_details[0].level_learned_at > 0
  })

  const sortedMoves = moves.sort(function(a, b) {
    return a.version_group_details[0].level_learned_at - b.version_group_details[0].level_learned_at
  })

  const filteredMoves = sortedMoves.map((move, index) => {
    return <li key={index}>{move.move.name} ({move.version_group_details[0].level_learned_at})</li>
  })

  const types = currentPokemon.types.map((type, index) =>{
    return type.type.name;
  })

  if (types.length===1){
    var result = `${types[0]}`
  }
  else {
    var result = `${types[0]}/${types[1]}`
  }





  return(
    <div className="pokemon-detail">
    <h3>
      {currentPokemon.forms[0].name}
    </h3>
    <img id="picture" src={currentPokemon.sprites.front_default}/>
    <p><b>Type:</b> {result}</p>
    <h4>Moves learned</h4>
    <ul>
      {filteredMoves}
    </ul>


    </div>


  )
}

export default PokemonDetail;
