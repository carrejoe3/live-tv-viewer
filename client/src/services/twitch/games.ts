import { apiClient } from './index'

export async function getGames () {
  return apiClient.games
}
