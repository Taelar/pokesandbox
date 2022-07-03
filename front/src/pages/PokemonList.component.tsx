import { FC } from 'react'
import { useQuery } from 'react-query'
import { PokemonListItem } from 'components/pokemon'
import { Pokemon } from 'types'
import { Outlet } from 'react-router-dom'

const queryKey = 'pokemonList'

export const PokemonList: FC = () => {
  const query = useQuery<Pokemon[]>(queryKey, async () => {
    const response = await fetch(`/pokemons?limit=30`)
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(`${response.status}`)
    }
  })

  return (
    <div className="w-full h-full flex">
      <div className="w-52 h-full overflow-y-auto border-r border-slate-400">
        {query.data?.map((item) => (
          <PokemonListItem key={item.id} item={item} />
        ))}
      </div>
      <Outlet />
    </div>
  )
}
