import { FC } from 'react'

export const LoadingFallback: FC = () => (
  <div className="flex items-center justify-center w-full h-full text-3xl text-slate-400">
    <span className="animate-spin animate-pulse">Loading...</span>
  </div>
)
