import React from 'react'
import { Container } from './styles'
import { ipcRenderer, remote } from 'electron'
import { Route, Switch } from 'react-router-dom'
import PutIn from '../putIn'
import TakeOut from '../takeOut'
import Layout from '../../layout'
export default class Home extends React.Component {
  constructor (props:any) {
    super(props)
    this.goLogin = this.goLogin.bind(this)
  }

  componentDidMount () {
    if (remote.getGlobal('token') === null) {
      console.log('props', this.props)
      this.props.history.push('/login')
    }
  }

  goLogin () {
    this.props.history.push('/login')
  }

  render () {
    return (
      <Layout>
        <Switch>
          <Route exact path="/put-in" component={PutIn}/>
          <Route exact path="/take-out" component={TakeOut}/>
        </Switch>
      </Layout>
    )
  }
}
