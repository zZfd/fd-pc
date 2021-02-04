import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch, Link, NavLink } from 'react-router-dom'
import { Row, Col, DatePicker, Space, Select, Dropdown, Tooltip, Menu, Button, Input, Table } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
import PutInDetail from './putInDetail'
import PutInEntry from './putInEntry'
import styles from './index.less'

import classNames from 'classnames'

const { RangePicker } = DatePicker
const { Option } = Select
const { Search } = Input
const columns = [
  {
    title: '入库单号',
    dataIndex: 'id',
    width: 150
  },
  {
    title: '入库类型',
    dataIndex: 'type',
    width: 150
  },
  {
    title: '入库时间',
    dataIndex: 'date'
  },
  {
    title: '备注',
    dataIndex: 'desc',
    ellipsis: true
  },
  {
    title: '经办人',
    dataIndex: 'orderer'
  },
  {
    title: '操作',
    dataIndex: 'operations',
    fixed: 'right',
    width: 100,
    render: () => <a>详情</a>
  }
]

const data = []
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  })
}
const menu = (
  <Menu >
    <Menu.Item key="1" icon={<UserOutlined />}>
      1st menu item
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      3rd menu item
    </Menu.Item>
  </Menu>
)
// class PutIn extends Component<any, any> {
//   render () {
//     return (
//       <div>putIn入库</div>
//     )
//   }
// }

function PutIn (props):JSX.Element {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  return (
    <Row gutter={{ xs: 8, sm: 16 }} justify={'space-between'}>
      <Col className={'layout-section'} xs={24} sm={24} md={17} xl={19} >
        <Switch>
          <Route exact path="/put-in/detail" component={PutInDetail}/>
          <Route exact path="/put-in/Entry" component={PutInEntry}/>

          <Redirect to="/put-in/detail" />
        </Switch>
      </Col>
      <Col className={'layout-section'} style={{ padding: '20px 15px 15px', height: 'max-content' }} xs={24} sm={24} md={6} xl={4} >
        <div className={'title-text-color'} style={{ padding: '0 0 13px' }}>帮助引导</div>
        <div className='section-guide'>
          <div className='section-guide__title'>功能介绍</div>
          <div className='section-guide__content'>
          您可在此查询入库单，还进行多种类型的入库操作。
          </div>
        </div>
        <div className='section-guide'>
          <div className='section-guide__title'>使用指南</div>
          <div className='section-guide__content'>
            <ul>
              <li><span className={'section-guide__dot'}></span>入库单使用指南</li>
            </ul>
          </div>
        </div>
        <div className={'section-guide'}>
          <div className={'section-guide__title'}>常见问题</div>
          <div className={'section-guide__content'}>
            <ul>
              <li><span className={'section-guide__dot'}></span> 如何使用扫码枪？</li>
            </ul>
          </div>
        </div>
      </Col>

    </Row>

  )
}
export default PutIn
