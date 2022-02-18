import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { apiClient } from '../services/twitch'
import thunk from 'redux-thunk';
import initialState from './state';

const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS'

function reducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_GAMES_SUCCESS:
      return {
        games: action.payload
      }
    default:
      return state
  }
}

export const getGames = () => {
  return async (dispatch) => {
    try {
      const response = await apiClient.games.getTopGames()

      dispatch(fetchGamesSuccess(response.data.map(i => {
        return {
          id: i.id,
          name: i.name,
          boxArtUrl: i.boxArtUrl
        }
      })))
    } catch (error) {
      console.error(error)
    }
  }
}

const fetchGamesSuccess = (games: { id: string, name: string, boxArtUrl: string }[]) => {
  return {
    type: FETCH_GAMES_SUCCESS,
    payload: games
  }
}

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
