import React from 'react'
import { render } from 'react-dom'
import { GlobalStyle } from './styles/GlobalStyle'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
// import Greetings from './components/Greetings'
import Login from './pages/login'
import Home from './pages/home'
import Error404 from './pages/error-pages/404'
import './styles/global.css' // 引入antd样式

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
          <Route path='/' component={Home} />
          <Route path='/404'exact component={Error404} />
          <Redirect to='/404' />
        </Switch>
      </Router>
    </>
  )
}

render(<App />, mainElement)
