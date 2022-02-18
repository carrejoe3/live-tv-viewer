import { apiClient } from '../services/twitch'

export const getGames = () => {
  return async (dispatch) => {
    try {
      const response = await apiClient.games.getTopGames()
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }
}
