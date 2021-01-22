import React from 'react'
import { Container } from './styles'
import { ipcRenderer, remote } from 'electron'
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom'
import PutIn from '../PutIn/put-in'
import TakeOut from '../TakeOut/take-out'
import Error404 from '../error-pages/404/404'
import { useRouteMatch } from 'react-router'
export default class Home extends React.Component {
  constructor (props:any) {
    super(props)
  }

  componentDidMount () {
    // const route = useRouteMatch()
    // console.log(route)
  }

  render () {
    if (remote.getGlobal('token') === null) {
      console.log('props', this.props)
      // this.props.history.push('/login')
    }
    console.log(this.props.history)
    return (
      <>
        <Container>
          Home
          <Link to='/put-in'>入库</Link>
          <Link to='/take-out'>出库</Link>
        </Container>
        {this.props.children}

        <Route path='/put-in' exact component={PutIn} />
        <Route path='/' exact component={PutIn} />

        <Route path='take-out' exact component={TakeOut} />
        <Route path='404'exact component={Error404}/>

      </>
    )
  }
}
