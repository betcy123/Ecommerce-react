import React, {Component} from 'react';
import $ from 'jquery';
import 'antd/dist/antd.css';
import axios from 'axios';
import { Input } from 'antd';
import { Button, Radio} from 'antd';
import ReactDOM from 'react-dom';
import { Collapse } from 'antd';
import { Layout, Menu, Breadcrumb, Icon,} from 'antd/es';
const { SubMenu } = Menu;
const { Header,Footer, Content, Sider } = Layout;
const Panel = Collapse.Panel;
const text1 = `
You can track your order by clicking on Track my order icon `;
const text2 = `
 Go to contact us icon and put your requirement for miss call  .`;
const text3 = `
      There are two mode of payements: 1. online payment
      2.cash on delivery.`;
const text4 = `
          Delivery charge is applicable for all your orders.`;

  const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
  };

class Help extends Component {
    constructor(props){
       super(props);
       this.state = {


     }
   }

    render() {
        return(
          <Layout>
            <Header className="header">
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1"><a href="/home">Home</a></Menu.Item>
                <Menu.Item key="2">My Cart</Menu.Item>
                <Menu.Item key="3">Wish List</Menu.Item>
                <Menu.Item key="9" onClick={(event) => this.logout(event)}>Logout</Menu.Item>
              </Menu>
            </Header>
            <Layout>
              <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                >
                  <SubMenu key="sub1" title={<span><Icon type="user" />Home</span>}>
                    <Menu.Item key="1">Mycart</Menu.Item>
                    <Menu.Item key="2">WishLISt</Menu.Item>

                  </SubMenu>
                  <SubMenu key="sub2" title={<span><Icon type="laptop" />Site</span>}>
                    <Menu.Item key="3">Help</Menu.Item>
                    <Menu.Item key="4"><a href="/about">About</a></Menu.Item>
                    <Menu.Item key="5"><a href="/contact">Contact US</a></Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout style={{ padding: '0 24px 24px' }}>
                  <Content style={{
                  background: '#fff', padding: 24, margin: 0, minHeight: 750,align: 'left',
                }}
                >
                <h1 ><Icon type="question-circle" />&nbsp; Learn how to...</h1>
                <Collapse bordered={false} defaultActiveKey={['1']}>
                <Panel header="Where's My Order?" key="1" style={customPanelStyle}>
                  <p>{text1}</p>
                </Panel>
                <Panel header="Track by Missed Call" key="2" style={customPanelStyle}>
                  <p>{text2}</p>
                </Panel>
                <Panel header="Paying for Your Order" key="3" style={customPanelStyle}>
                  <p>{text3}</p>
                </Panel>
                <Panel header="Delivery Charges" key="3" style={customPanelStyle}>
                  <p>{text4}</p>
                </Panel>
              </Collapse>
              </Content>
              </Layout>
            </Layout>
            </Layout>);



       }
       logout(event)
       {
        window.location.href="/login1";
       }

      }


export default Help;
// <h1 ><Icon type="question-circle" />&nbsp; Learn how to...</h1>
// <br></br><br></br>
// <h3><Icon type="smile" />&nbsp;&nbsp;&nbsp; Where's My Order?</h3>
// <h3> <Icon type="smile" />&nbsp; &nbsp;Track by Missed Call</h3>
// <h3> <Icon type="smile" /> &nbsp;&nbsp;Paying for Your Order</h3>
// <h3> <Icon type="smile" />&nbsp;&nbsp;&nbsp;&nbsp;Delivery Charges</h3>
// <h3><Icon type="smile" />&nbsp;&nbsp;Returns & Refunds</h3>
// <h3><Icon type="smile" />&nbsp;&nbsp;Manage Your Account Information</h3>
// <h3><Icon type="smile" />&nbsp;&nbsp;Pay on Delivery</h3>
