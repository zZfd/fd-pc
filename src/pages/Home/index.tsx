import React from 'react'
import { Container } from './styles'
import { ipcRenderer, remote } from 'electron'
import { Route, Switch } from 'react-router-dom'
import PutIn from '../putIn'
import TakeOut from '../takeOut'
import Layout from '../../layout'
// import io from 'socket.io'
import io from 'socket.io-client'
import { Button } from 'antd'
export default class Home extends React.Component {
  constructor (props:any) {
    super(props)
    this.goLogin = this.goLogin.bind(this)
  }

  async connectSocket ():Promise<any> {
    const socket = io('ws://localhost:3000/', {
      reconnectionAttempts: 10,
      query: {
        userId: 'zfd'
      }
    })
    socket.on('connect', () => {
      console.log('连接成功客户端')
      console.log(socket.id)
      alert('连接成功')
      // 获取聊天室所需所有信息
      socket.emit('putin', { userId: 'zfd' })
    })
    socket.on('disconnect', () => {
      console.log('disconnect')
    })
    // 初始化事件监听
    socket.on('putin', (data: any) => {
      console.log('putInClientListen', data)
    })
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
          <Route path="/put-in" component={PutIn}/>
          <Route exact path="/take-out" component={TakeOut}/>
        </Switch>
        <Button type="primary" onClick={this.connectSocket}>
          登 录
        </Button>
      </Layout>
    )
  }
}
