import { FC, Suspense } from 'react'
import { PokemonListItem } from 'components/pokemon'
import { Outlet } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback, LoadingFallback } from 'components/shared'
import { usePokemonList } from 'hooks/queries/pokemon.queries'

export const PokemonList: FC = () => {
  const pokemonList = usePokemonList()

  return (
    <div className="w-full h-full flex">
      <div className="w-96 h-full overflow-y-auto border-r border-slate-400">
        {pokemonList.data?.map((item) => (
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
