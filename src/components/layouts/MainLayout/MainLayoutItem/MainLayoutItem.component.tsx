import { FC } from 'react'
import { Link } from 'react-router-dom'
import { MainLayoutItemProps } from './MainLayoutItem.model'

export const MainLayoutItem: FC<MainLayoutItemProps> = ({ title, path, icon }) => {
  return (
    <div className="text-slate-400 font-semibold text-xl">
      <Link to={path}>
        <div className="flex items-center space-x-2">
          {icon}
          <span>{title}</span>
        </div>
      </Link>
    </div>
  )
}
