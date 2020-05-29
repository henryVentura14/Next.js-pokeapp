import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import fetchPokemon from '../action/action.search'

const Search = () => {
  const dispatch = useDispatch()
  const [pokemon_name, set_pokemon_name] = useState('mewtwo')
  return (
    <div className='form-group'>
      <style jsx>
        {`
          .form-group {
            margin-top: 10rem;
            height: 6rem;
            display: flex;
            flex-direction: column;
          }
          .btn {
            border: none;
            height: 2rem;
            margin-top: 1rem;
          }
          .input{
            height: 2rem;
            margin-top: 1rem; 
          }
        `}
      </style>
      <label htmlFor='search_pokemon' className='text-white'>
        Search Pokemon :
      </label>
      <input
        type='text'
        className='input'
        id='search_pokemon'
        value={pokemon_name}
        onChange={event => {
          set_pokemon_name(event.target.value)
        }}
      />
      <button
        className='btn'
        onClick={() => {
          dispatch(fetchPokemon(pokemon_name))
        }}
      >
        Send
      </button>
    </div>
  )
}

export default Search
