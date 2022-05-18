// import { IApiResourceList, IPokemon } from 'pokeapi-typescript'
import { FC } from 'react'
import { useQuery } from 'react-query'
import { IPokemon, INamedApiResourceList } from 'pokeapi-typescript'
import { PokemonListItem } from 'components/pokemon'

const pokemonListKey = 'pokemonList'

export const PokemonList: FC = () => {
  const pokemonQuery = useQuery<INamedApiResourceList<IPokemon>>(pokemonListKey, async () => {
    const response = await fetch(`pokemon`)
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(`${response.status}`)
    }
  })

  return (
    <div className="w-full h-full flex">
      <div className="w-52 h-full overflow-y-auto border-r border-slate-400">
        {pokemonQuery.data?.results.map((item) => (
          <PokemonListItem key={item.url} item={item} />
        ))}
      </div>
    </div>
  )
}
