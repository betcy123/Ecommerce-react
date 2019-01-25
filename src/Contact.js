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

  const customPanelStyle = {
  paddingLeft: 50,

    };
  const customPanelStyle1 = {
    paddingLeft: 1,

      };
class Contact extends Component {
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
                <Menu.Item key="1"><a href="/home1">Home</a></Menu.Item>
                <Menu.Item key="2"><a href="/mycart">My Cart</a></Menu.Item>
                <Menu.Item key="3"><a href="/wishlist">Wish List</a></Menu.Item>
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
                    <Menu.Item key="1"><a href="/mycart">Mycart</a></Menu.Item>
                    <Menu.Item key="2"><a href="/wishlist">WishLISt</a></Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" title={<span><Icon type="laptop" />Site</span>}>
                    <Menu.Item key="3"><a href="/help">Help</a></Menu.Item>
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
                  <div>
                <h1 style={customPanelStyle1}><Icon type="mobile" />  &nbsp;&nbsp; &nbsp;&nbsp;Contact Us</h1>
                <br></br><br></br>
                <br></br>
                <h3><p style={customPanelStyle}><Icon type="phone" /> &nbsp;call: Troll free Number:---1800-9767-876554</p></h3>
                <h3><p><Icon type="mail" />  &nbsp;&nbsp;Email:-shoppe.contact@gmail.com</p></h3>
                  </div>
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


export default Contact;
