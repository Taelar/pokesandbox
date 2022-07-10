import classNames from 'classnames'
import { FC } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PokemonListItemProps } from './PokemonListItem.model'

export const PokemonListItem: FC<PokemonListItemProps> = ({ item }) => {
  const { id } = useParams()

  return (
    <Link to={item.id}>
      <div
        className={classNames(
          'flex items-center gap-4 p-4 pl-8 border-b border-slate-600 hover:bg-slate-500 cursor-pointer',
          { 'bg-slate-600': id === item.id },
        )}
      >
        <span className="text-slate-700 font-bold text-base px-1 rounded bg-slate-400 capitalize">
          {item.id}
        </span>
        <span className="text-slate-200 text-lg capitalize">{item.name}</span>
      </div>
    </Link>
  )
}
