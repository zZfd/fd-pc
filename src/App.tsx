import React from 'react'
import { render } from 'react-dom'
import { GlobalStyle } from './styles/GlobalStyle'

// import Greetings from './components/Greetings'
import Login from './pages/login/login'
const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Login />
    </>
  )
}

render(<App />, mainElement)
