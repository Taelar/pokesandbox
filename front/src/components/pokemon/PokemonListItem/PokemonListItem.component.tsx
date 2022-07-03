import { FC } from 'react'
import { Link } from 'react-router-dom'
import { PokemonListItemProps } from './PokemonListItem.model'

export const PokemonListItem: FC<PokemonListItemProps> = ({ item }) => {
  return (
    <Link to={item.id}>
      <div className="p-4 text-slate-200 text-lg capitalize border-b border-slate-600 hover:bg-slate-600 cursor-pointer">
        {item.name}
      </div>
    </Link>
  )
}
