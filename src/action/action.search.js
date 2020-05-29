// Actions config
import {
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE
} from '../config/variables'
import Axios from 'axios'

const fetchPokemonRequest = () => {
  return {
    type: FETCH_POKEMON_REQUEST
  }
}
const fetchPokemonSuccess = pokemon => {
  return {
    type: FETCH_POKEMON_SUCCESS,
    payload: pokemon
  }
}
const fetchPokemonFailure = error => {
  return {
    type: FETCH_POKEMON_FAILURE,
    payload: error
  }
}
const fetchPokemon = value => {
  return dispatch => {
    dispatch(fetchPokemonRequest())
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${value}/`)
      .then(response => {
        dispatch(fetchPokemonSuccess([response.data]))
      })
      .catch(error => {
        dispatch(fetchPokemonFailure('No result'))
      })
  }
}
export default fetchPokemon
