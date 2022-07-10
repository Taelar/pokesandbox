import { FC, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { RiGitRepositoryFill, RiPlaystationLine } from 'react-icons/ri'
import { MainLayoutItem } from './MainLayoutItem'
import { ErrorFallback, LoadingFallback } from 'components/shared'
import { ErrorBoundary } from 'react-error-boundary'

export const MainLayout: FC = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="w-72 bg-slate-900 p-4">
        <div className="my-8 text-slate-200 font-bold text-2xl text-center">Poke Sandbox</div>
        <div className="space-y-2 p-4">
          <MainLayoutItem title="Pokedex" path="/pokemons" icon={<RiGitRepositoryFill />} />
          <MainLayoutItem title="Wazo" path="/wazo" icon={<RiPlaystationLine />} />
        </div>
      </div>
      <div className="h-full w-full overflow-y-auto overflow-x-hidden bg-slate-800">
        <ErrorBoundary fallbackRender={ErrorFallback}>
          <Suspense fallback={<LoadingFallback />}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  )
}
