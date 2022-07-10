import { FC } from 'react'
import { RiLoader5Line, RiHeartFill, RiHeartLine } from 'react-icons/ri'
import { FavoriteButtonProps } from './FavoriteButton.model'
import classNames from 'classnames'

export const FavoriteButton: FC<FavoriteButtonProps> = ({ loading, favorite, onClick }) => {
  const title = !onClick ? undefined : favorite ? 'Remove from favorites' : 'Add to favorites'

  return (
    <div
      className={classNames('text-slate-100', {
        'cursor-pointer': !!onClick,
      })}
      onClick={onClick}
      title={title}
    >
      {(loading && <RiLoader5Line className="animate-spin" />) || (favorite && <RiHeartFill />) || (
        <RiHeartLine />
      )}
    </div>
  )
}
