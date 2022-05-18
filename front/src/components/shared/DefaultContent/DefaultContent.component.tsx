import { FC } from 'react'
import logo from './logo.svg'
import './DefaultContent.css'

export const DefaultContent: FC = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>There's nothing here but look at that spinning logo, isn't it cool ?</p>
    </header>
  </div>
)
