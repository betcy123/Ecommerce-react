import React, {Component} from 'react';
import $ from 'jquery';
import 'antd/dist/antd.css';
import axios from 'axios';
import { Input } from 'antd';
import { Button, Radio} from 'antd';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon,} from 'antd/es';
const { SubMenu } = Menu;
const { Header,Footer, Content, Sider } = Layout;

class Login1 extends Component {
    constructor(props){
       super(props);
       this.state = {
         email:'',
         password:''

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
               style={{ lineHeight: '64px' },{color: 'white'}}
             >

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

                 <SubMenu key="sub2" title={<span><Icon type="laptop" />Site</span>}>
                   <Menu.Item key="3">Help</Menu.Item>
                   <Menu.Item key="4">About</Menu.Item>
                   <Menu.Item key="5">Contact US</Menu.Item>
                 </SubMenu>
               </Menu>
             </Sider>
             <Layout style={{ padding: '0 24px 24px' }}>
                 <Content style={{
                 background: '#fff', padding: 24, margin: 0, minHeight: 750,
               }}
               >
               <br/>
               <h2>Login Here...</h2>
               <br/>
               <br/>
               <br/>
               <br/>
               <Input placeholder=" Email *" id="email"  style={{ width: 400 }} />
               <br/>
               <br/>
               <Input placeholder=" Password  *" id="password"  style={{ width: 400 }} />
               <br/>
               <br/>
               <br/>
               <br/>
               <Button type="primary" onClick={(event) => this.handleClick(event)}>Login</Button>
               <br/>
               <br/>
              </Content>
             </Layout>
           </Layout>
           </Layout>
         );

   }
   handleClick(event) {

      var uemail = $("#email").val();
      var pass = $("#password").val();
          axios.get('http://172.16.53.30:3000/login', {
            params:{
            email: uemail,
            psw: pass
          }
        })
        .then(function (response) {
          alert("sucess");
          window.location.assign("/home1");
        })
        .catch(function (error) {
          alert("sorry try again")
        });

      }
  }

export default Login1;
