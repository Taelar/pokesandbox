import { FC, Suspense } from 'react'
import { useQuery } from 'react-query'
import { PokemonListItem } from 'components/pokemon'
import { Pokemon } from 'types'
import { Outlet } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback, LoadingFallback } from 'components/shared'

const queryKey = 'pokemonList'

export const PokemonList: FC = () => {
  const query = useQuery<Pokemon[]>(queryKey, async () => {
    const response = await fetch(`/pokemons?limit=30`)
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(`Error while fetching pokemon list`)
    }
  })

  return (
    <div className="w-full h-full flex">
      <div className="w-96 h-full overflow-y-auto border-r border-slate-400">
        {query.data?.map((item) => (
          <PokemonListItem key={item.id} item={item} />
        ))}
      </div>
      <div className="overflow-y-auto w-full">
        <ErrorBoundary fallbackRender={ErrorFallback}>
          <Suspense fallback={<LoadingFallback />}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  )
}
