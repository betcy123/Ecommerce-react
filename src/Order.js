import React, {Component} from 'react';
import $ from 'jquery';
import 'antd/dist/antd.css';
import axios from 'axios';
import './style.css';
import { Input } from 'antd';
import { Button, Radio} from 'antd';
import ReactDOM from 'react-dom';
import { Collapse } from 'antd';
import { Layout, Menu, Breadcrumb, Icon,Dropdown,} from 'antd/es';
const { SubMenu } = Menu;
const { Header,Footer, Content, Sider } = Layout;
const RadioGroup = Radio.Group;
const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank">kerala</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" >karnataka</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank">tamilnadu</a>
      </Menu.Item>
    </Menu>
  );

class Order extends Component {
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
                <h1>your order </h1>
                <div className="order">
                  <h3>Add your address </h3>
                  <Input placeholder=" Enter your name *" id="name" required style={{ width: 400 }} />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Input placeholder=" 10 digit phonenumber*" id="number" required style={{ width: 400 }} />
                  <br/><br/>
                  <Input placeholder=" Pincode*" id="pin" required style={{ width: 400 }} />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Input placeholder="Locality*" id="locality" required style={{ width: 400 }} />
                  <br/><br/>
                  <Input placeholder="Address Area*" id="area" required style={{ width: 815, height:100 }} />
                  <br/>
                  <br/>
                  <Input placeholder="city/district/state*" id="city" required style={{ width: 600 }} />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                   <Dropdown overlay={menu} placement="bottomRight">
                    <Button required style={{ width: 200 }}>State</Button>
                   </Dropdown>
                   <br/>
                   <br/>
                   <RadioGroup name="radiogroup" defaultValue={1}>
                   <h4>address type</h4>
                    <Radio value={1}>Home(all day delivery)</Radio>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Radio value={2}>Work(delivery between(10 Am-5 pm))</Radio>
                    </RadioGroup>
                    <br/>
                    <br/>
                    <br/>
                    <Button type="primary" onClick="save">Save and Deliver. Here</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button type="dashed">Cancel</Button>
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
        save(event)
        {
          var ids=localStorage.getItem('id');
          var id = window.location.href.split('/')[window.location.href.split('/').length - 1];
          console.log(ids);
          axios.get('http://172.16.53.30:3000/order', {
            params:{
            user_id: ids,
            product_id: id,


          }
        })
        }
      }


export default Order;
