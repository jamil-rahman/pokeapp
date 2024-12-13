//Akashdeep Singh
export default function PokemonCard({ pokemon }) {
    return (
      <div className="pokemon-card">
        <img 
          src={pokemon.sprites.front_default} 
          alt={pokemon.name} 
          className="pokemon-image"
        />
        <h3 className="pokemon-name">{pokemon.name}</h3>
        <div className="pokemon-types">
          {pokemon.types.map(type => (
            <span key={type.type.name} className={`type ${type.type.name}`}>
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    );
  }