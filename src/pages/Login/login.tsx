import { Form, Input, Button } from 'antd'
import React from 'react'
import { Container } from './styles'
import { remote, ipcRenderer, BrowserWindow } from 'electron'
import { useHistory } from 'react-router-dom'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

const Login: React.FC = () => {
  const history = useHistory()

  const onFinish = (values: any) => {
    console.log('Success:', values)
    // remote.getCurrentWindow().close()
    ipcRenderer.sendSync('login', '123')
    history.push('/')
    // let mainWin: BrowserWindow | null = new remote.BrowserWindow({
    //   autoHideMenuBar: true,
    //   webPreferences: {
    //     nodeIntegration: true
    //   }
    // })
    // mainWin.loadURL('http://localhost:4000')
    // mainWin.on('close', () => {
    //   mainWin = null
    // })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Container>
      <Form
        {...layout }
        name="login"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: false, message: '请输入用户名' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: false, message: '请输入密码' }]}
        >
          <Input.Password />

        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
          登 录
          </Button>
        </Form.Item>
      </Form>

    </Container>
  )
}

export default Login
