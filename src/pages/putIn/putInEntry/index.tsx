import React, { useState } from 'react'
import {
  Form,
  Input,
  Select,
  Space, Dropdown, Button, Table, Menu
} from 'antd'
import classNames from 'classnames'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
type SizeType = Parameters<typeof Form>[0]['size'];
const { TextArea } = Input
const { Search } = Input
const columns = [
  {
    title: '单品名称',
    dataIndex: 'name',
    width: 150
  },
  {
    title: '产品条码',
    dataIndex: 'code',
    width: 150
  },
  // {
  //   title: '单品规格',
  //   dataIndex: 'spec',
  //   width: 150
  // },
  // {
  //   title: '包装类型',
  //   dataIndex: 'packingType'
  // },
  {
    title: '采购数量',
    dataIndex: 'amount'
  },
  {
    title: '进货价',
    dataIndex: 'purchasePrice'
  },
  {
    title: '销售价',
    dataIndex: 'salePrice'
  },
  {
    title: '到期时间',
    dataIndex: 'salePrice'
  },
  {
    title: '摆放区域',
    dataIndex: 'area'
  },
  {
    title: '是否已上架',
    dataIndex: 'isPut'
  },

  {
    title: '备注',
    dataIndex: 'desc',
    ellipsis: true
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
function PutInEntry ():JSX.Element {
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default')
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size)
  }
  return (
    <React.Fragment>
      <div className={classNames('layout-section__header', 'title-text-color')}>入库单 - 采购入库</div>
      <div className={'layout-section__body'} style={{ marginBottom: '20px' }}>
        <div className={'section-body__title'}>基本信息</div>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          initialValues={{ size: componentSize }}
          onValuesChange={onFormLayoutChange}
          size={componentSize as SizeType}
        >
          <Form.Item label="供应商名称">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="入库单备注">
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </div>
      <div className={'layout-section__body'}>
        <div className={classNames('section-body__title', 'clearfix')}>
          <Space>
        单品信息
            <Dropdown overlay={menu}>
              <Button>
                单品名称 <DownOutlined />
              </Button>
            </Dropdown>
            <Search placeholder="请输入单品名称" allowClear style={{ width: 200 }} />
          </Space>
          <Button type="primary" className='right'>批量导入</Button>

        </div>

        <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />,

      </div>

    </React.Fragment>
  )
}

export default PutInEntry
