import { FC } from 'react'
import { ErrorFallbackProps } from './ErrorFallback.model'

export const ErrorFallback: FC<ErrorFallbackProps> = ({ error }) => (
  <div className="flex items-center justify-center w-full h-full text-3xl text-slate-400">
    <span className="animate-bounce">{error.message}</span>
  </div>
)
