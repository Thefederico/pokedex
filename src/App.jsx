import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col } from 'antd'
import { Searcher } from './components/Searcher'
import { PokemonList } from './components/PokemonList'
import { getPokemon } from './api'
import logo from './assets/pokedex.png'
import { setPokemons } from './actions'

function App () {
  const dispatch = useDispatch()

  const pokemons = useSelector(state => state.pokemons)

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await getPokemon()
      dispatch(setPokemons(response))
    }
    fetchPokemons()
  }, [])

  return (
    <div className='App'>
      <Col sm={4} offset={9}>
        <img src={logo} alt='Pokedex' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  )
}

export default App
