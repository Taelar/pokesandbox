import { FC } from 'react'
import { SkillListProps } from './SkillList.model'

export const SkillList: FC<SkillListProps> = ({ skills }) => {
  return (
    <div className="grid grid-cols-skillList py-4 px-8 gap-x-4 gap-y-2 rounded border border-slate-300 text-slate-300 text-lg capitalize">
      {skills.map(({ learnedat, name }) => (
        <>
          <span>{name}</span>
          <span>{learnedat}</span>
        </>
      ))}
    </div>
  )
}
