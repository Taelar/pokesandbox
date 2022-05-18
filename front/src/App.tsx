import { MainLayout } from 'components/layouts'
import { DefaultContent } from 'components/shared'
import { PokemonList } from 'pages/PokemonList.component'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<PokemonList />} />
        <Route path="*" element={<DefaultContent />} />
      </Route>
    </Routes>
  )
}

export default App
