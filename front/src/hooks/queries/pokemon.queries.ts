import { useMutation, useQuery, useQueryClient } from 'react-query'
import { Pokemon } from 'types'

export const POKEMONS_QUERY_KEY = 'pokemons'
const url = '/pokemons'

export const usePokemonList = () =>
  useQuery<Pokemon[]>(POKEMONS_QUERY_KEY, async () => {
    const response = await fetch(`${url}?limit=30`)
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(`Error while fetching pokemon list`)
    }
  })

export const usePokemonById = (id: string) =>
  useQuery<Pokemon>([POKEMONS_QUERY_KEY, id], async () => {
    const response = await fetch(`${url}/${id}`)
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(`Unable to fetch pokemon n°${id}`)
    }
  })

export const usePokemonMutationById = (id: string) => {
  const queryClient = useQueryClient()

  return useMutation(
    async (updatedData: Pokemon) => {
      const url = `/${POKEMONS_QUERY_KEY}/${id}`
      const response = await fetch(url, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(updatedData),
      })
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(`Unable to fetch pokemon n°${id}`)
      }
    },
    {
      onSuccess: (data, variables) => {
        queryClient.invalidateQueries([POKEMONS_QUERY_KEY])
        queryClient.setQueryData([POKEMONS_QUERY_KEY, variables.id], data)
      },
    },
  )
}
