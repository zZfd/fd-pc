import React from 'react'
import { render } from 'react-dom'
import { GlobalStyle } from './styles/GlobalStyle'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
// import Greetings from './components/Greetings'
import Login from './pages/login/login'
import Home from './pages/Home/home'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Home} >

          </Route>

          <Redirect to='/'/>
        </Switch>
      </Router>
    </>
  )
}

render(<App />, mainElement)
