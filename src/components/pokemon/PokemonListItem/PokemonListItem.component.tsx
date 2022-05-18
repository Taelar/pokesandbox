import { FC } from 'react'
import { PokemonListItemProps } from './PokemonListItem.model'

export const PokemonListItem: FC<PokemonListItemProps> = ({ item }) => {
  return (
    <div className="p-4 text-slate-200 capitalize border-b border-slate-600 hover:bg-slate-600 cursor-pointer">
      {item.name}
    </div>
  )
}
