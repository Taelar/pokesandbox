import { FavoriteButton } from 'components/shared'
import { SkillList } from 'components/skills/SkillList'
import { FC, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { usePokemonById, usePokemonMutationById } from '../../../hooks/queries/pokemon.queries'

export const PokemonDetail: FC = () => {
  const { id } = useParams()

  const query = usePokemonById(id ?? '')

  const mutation = usePokemonMutationById(id ?? '')

  const handleFavorite = useCallback(() => {
    if (query.data) {
      mutation.mutate({ ...query.data, favorite: !query.data.favorite })
    }
  }, [mutation, query.data])

  return query.data ? (
    <div className="w-full flex flex-col items-center p-16">
      <div className="bg-white rounded-full p-12 mb-4">
        <img className="w-56 h-56 bg-white" src={query.data.img} alt={query.data.name} />
      </div>
      <span className="text-slate-100 font-medium text-5xl mb-4">{query.data?.name}</span>
      <div className="text-3xl">
        <FavoriteButton
          favorite={!!query.data.favorite}
          loading={mutation.status === 'loading'}
          onClick={handleFavorite}
        />
      </div>
      <div className="grid grid-cols-2 gap-8 mt-16 items-start ">
        <SkillList skills={query.data.moves.level} />
        <SkillList skills={query.data.moves.tmhm} />
      </div>
    </div>
  ) : null
}
