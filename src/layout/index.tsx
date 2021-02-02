import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import {
  DesktopOutlined,
  PieChartOutlined
} from '@ant-design/icons'
import styles from './index.less'
import { Link } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

export default class Home extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = (collapsed:boolean):void => {
    console.log(collapsed)
    this.setState({ collapsed })
  };

  render ():JSX.Element {
    const { collapsed } = this.state
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className={styles.logo} />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu key='product' title='产品'>
              <Menu.ItemGroup key='pLibrary' title='产品库'>
                <Menu.Item key="pList" icon={<PieChartOutlined />}>
                  <Link to="/put-in">产品库列表</Link>
                </Menu.Item>
                <Menu.Item key="pClassify" icon={<DesktopOutlined />}>
                  <Link to="/take-out">产品库分类</Link>
                </Menu.Item>
                <Menu.Item key="pBrand" icon={<DesktopOutlined />}>
                  <Link to="/take-out">产品库品牌</Link>
                </Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key='shopProduct' title='门店产品'>
                <Menu.Item key="spList" icon={<PieChartOutlined />}>
                  <Link to="/put-in">产品列表</Link>
                </Menu.Item>
                <Menu.Item key="spDistribution" icon={<PieChartOutlined />}>
                  <Link to="/put-in">产品分布</Link>
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu key='shop' title='门店'>
              <Menu.ItemGroup key='shopManage' title='门店管理'>
                <Menu.Item key="performance" icon={<PieChartOutlined />}>
                  <Link to="/put-in">业绩明细</Link>
                </Menu.Item>
                <Menu.Item key="staffManage" icon={<DesktopOutlined />}>
                  <Link to="/take-out">人员管理</Link>
                </Menu.Item>
                <Menu.Item key="areaManage" icon={<DesktopOutlined />}>
                  <Link to="/take-out">区域管理</Link>
                </Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key='cashierOrder' title='收银开单'>
                <Menu.Item key="billManage" icon={<PieChartOutlined />}>
                  <Link to="/put-in">发票管理</Link>
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu key='inventory' title='库存'>
              <Menu.ItemGroup key='inAndOut' title='进销存'>
                <Menu.Item key="putIn" icon={<PieChartOutlined />}>
                  <Link to="/put-in">入库单</Link>
                </Menu.Item>
                <Menu.Item key="takeOut" icon={<DesktopOutlined />}>
                  <Link to="/take-out">出库单</Link>
                </Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key='inventoryQuery' title='库存查询'>
                <Menu.Item key="iQuery" icon={<PieChartOutlined />}>
                  <Link to="/put-in">库存查询</Link>
                </Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key='inventoryReport' title='报告'>
                <Menu.Item key="inReport" icon={<PieChartOutlined />}>
                  <Link to="/put-in">进货报告</Link>
                </Menu.Item>
                <Menu.Item key="outReport" icon={<PieChartOutlined />}>
                  <Link to="/put-in">出货报告</Link>
                </Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key='inventorySetting' title='设置'>
                <Menu.Item key="supplier" icon={<PieChartOutlined />}>
                  <Link to="/put-in">供应商管理</Link>
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu key='client' title='客户'>
              <Menu.ItemGroup key='clientManage' title='客户管理'>
                <Menu.Item key="cOverView" icon={<PieChartOutlined />}>
                  <Link to="/put-in">概览</Link>
                </Menu.Item>
                <Menu.Item key="cQuery" icon={<DesktopOutlined />}>
                  <Link to="/take-out">查询</Link>
                </Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key='clientRights' title='权益管理'>
                <Menu.Item key="vipSetting" icon={<PieChartOutlined />}>
                  <Link to="/put-in">会员设置</Link>
                </Menu.Item>
                <Menu.Item key="vipRights" icon={<PieChartOutlined />}>
                  <Link to="/put-in">会员权益</Link>
                </Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key='clientAssets' title='资产管理'>
                <Menu.Item key="scoreManage" icon={<PieChartOutlined />}>
                  <Link to="/put-in">积分管理</Link>
                </Menu.Item>
                <Menu.Item key="storeManage" icon={<PieChartOutlined />}>
                  <Link to="/put-in">储值管理</Link>
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu key='setting' title='设置'>
              <Menu.ItemGroup key='enterprise' title='企业信息'>
                <Menu.Item key="eInfo" icon={<PieChartOutlined />}>
                  <Link to="/put-in">企业信息</Link>
                </Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key='accountPower' title='账号权限'>
                <Menu.Item key="aPower" icon={<PieChartOutlined />}>
                  <Link to="/put-in">账号权限</Link>
                </Menu.Item>
                <Menu.Item key="operationLogs" icon={<PieChartOutlined />}>
                  <Link to="/put-in">操作日志</Link>
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className={styles['layout-background']} style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className={styles['layout-background']} style={{ padding: 24, minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}
