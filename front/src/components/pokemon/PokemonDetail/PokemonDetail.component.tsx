import { FC } from 'react'
import { useQuery } from 'react-query'
import { Pokemon } from '../../../types/Pokemon'
import { useParams } from 'react-router-dom'
import { SkillList } from 'components/skills/SkillList'

const queryKey = 'pokemons'

export const PokemonDetail: FC = () => {
  const { id } = useParams()

  const query = useQuery<Pokemon>([queryKey, id], async ({ queryKey }) => {
    const url = `/${queryKey[0]}/${queryKey[1]}`
    const response = await fetch(url)
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(`Unable to fetch pokemon n°${id}`)
    }
  })

  return query.data ? (
    <div className="w-full flex flex-col items-center p-16">
      <div className="bg-white rounded-full p-12 mb-4">
        <img className="w-56 h-56 bg-white" src={query.data.img} alt={query.data.name} />
      </div>
      <span className="text-slate-100 font-medium text-5xl mb-8">{query.data?.name}</span>
      <div className="grid grid-cols-2 gap-8 items-start ">
        <SkillList skills={query.data.moves.level} />
        <SkillList skills={query.data.moves.tmhm} />
      </div>
    </div>
  ) : null
}
