import React from "react";
const Card = ({ pokemon, loading, infoPokemon }) => {
  // console.log(pokemon);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <>
              <div
                className="card"
                key={item.id}}
              >
                <img src={item.sprites.front_default} alt="" className="image"/>
                <h2>{item.name}</h2>
                <br/><br/><br/>
                <h1 className="title">Abilities</h1>
                 {item.abilities.map((poke) => {
                  return (
                    <>
                        <h1>{poke.ability.name}</h1>
                    </>
                  );
                })}
                <h1 className="title">Moves</h1>
                 {item.moves.slice(0,5).map((poke) => {
                  return (
                    <>
                        <h1>{poke.move.name}</h1>
                    </>
                  );
                })}
                <h1 className="title">Weight</h1>
                <h1>{item.weight} kgs</h1>
                  
                
              </div>
              
            </>
          );
        })
      )}
    </>
  );
};
export default Card;
