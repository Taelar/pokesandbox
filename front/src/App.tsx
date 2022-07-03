import { MainLayout } from 'components/layouts'
import { DefaultContent } from 'components/shared'
import { PokemonDetail } from 'components/pokemon'
import { PokemonList } from 'pages/PokemonList.component'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="pokemons" element={<PokemonList />}>
          <Route path=":id" element={<PokemonDetail />} />
        </Route>
        <Route path="*" element={<DefaultContent />} />
      </Route>
    </Routes>
  )
}

export default App
