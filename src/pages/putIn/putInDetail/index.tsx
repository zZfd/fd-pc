import React, { Component } from 'react'
import { Row, Col, DatePicker, Space, Select, Dropdown, Menu, Button, Input, Table } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'

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

function PutInDetail ():JSX.Element {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.

  return (
    <React.Fragment>
      <div className={classNames('layout-section__header', 'title-text-color')}>入库单</div>
      <div className={'layout-section__body'}>
        <div className={'content-section'}>
          <Space size={'middle'}>
            <Button>采购入库</Button>
            <Button>退货入库</Button>
            <Button>调拨入库</Button>
            <Button>其他入库</Button>
          </Space>
        </div>
        <div className={'content-section'} style={{ paddingBottom: '10px' }}>
          <Row gutter={[20, 20]}>
            <Col lg={24} xl={14} >
              <Space size={'small'}>
                <label htmlFor='time'>入库时间</label>

                <RangePicker />
              </Space>
            </Col>
            <Col lg={24} xl={10}>
              <Space size={'small'}>
                <label htmlFor='id'>入库单号</label>
                <Search placeholder="input search text" allowClear style={{ width: 200 }} />
              </Space>
            </Col>
          </Row>
          <Row gutter={[20, 20]} >
            <Col lg={24} xl={8} >
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="供应商名称"
                optionFilterProp="children"
                // onChange={onChange}
                // onFocus={onFocus}
                // onBlur={onBlur}
                // onSearch={onSearch}
                // filterOption={(input, option) =>
                //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                // }
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Col>
            <Col lg={24} xl={8} >
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="经办人"
                optionFilterProp="children"
                // onChange={onChange}
                // onFocus={onFocus}
                // onBlur={onBlur}
                // onSearch={onSearch}
                // filterOption={(input, option) =>
                //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                // }
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Col>
            <Col lg={24} xl={8} >
              <Dropdown overlay={menu}>
                <Button>
                入库类型 <DownOutlined />
                </Button>
              </Dropdown>
            </Col>
          </Row>

        </div>
        <div className={'content-section'}>
          <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />,

        </div>
      </div>
    </React.Fragment>

  )
}
export default PutInDetail
