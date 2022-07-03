import classNames from 'classnames'
import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MainLayoutItemProps } from './MainLayoutItem.model'

export const MainLayoutItem: FC<MainLayoutItemProps> = ({ title, path, icon }) => {
  const location = useLocation()
  const isActive = location.pathname.includes(path)

  return (
    <div
      className={classNames('font-semibold text-xl', {
        'text-slate-300': isActive,
        'text-slate-500': !isActive,
      })}
    >
      <Link to={path}>
        <div className="flex items-center space-x-2">
          {icon}
          <span>{title}</span>
        </div>
      </Link>
    </div>
  )
}
