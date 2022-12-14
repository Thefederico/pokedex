import { PokemonCard } from './PokemonCard'

function PokemonList ({ pokemons }) {
  return (
    <div className='PokemonList'>
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.name} name={pokemon.name} />
      ))}
    </div>
  )
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill('')
}

export { PokemonList }
