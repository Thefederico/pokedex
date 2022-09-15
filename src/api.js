async function getPokemon () {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const data = await response.json()
    return data.results
  } catch {}
}

export { getPokemon }
