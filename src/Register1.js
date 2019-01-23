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

class Register1 extends Component {
    constructor(props){
       super(props);
       this.state = {
         name:'',
         number:'',
         email:'',
         password:'',
         cpassword:''

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
                    <Menu.Item key="3"><a href="/help">Help</a></Menu.Item>
                    <Menu.Item key="4"><a href="/about">About</a></Menu.Item>
                    <Menu.Item key="5"><a href="/contact">Contact US</a></Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout style={{ padding: '0 24px 24px' }}>
                  <Content style={{
                  background: '#fff', padding: 24, margin: 0, minHeight: 750,
                }}
                >
                <h1>Create an account....<Icon type="usergroup-add" /></h1>
                <br/>
                <br/>
                <br/>
                <br/>
                <Input placeholder=" Enter your name *" id="name" required style={{ width: 400 }} />
                <br/>
                <br/>
                <Input placeholder=" Enter phonenumber *" id="number" required style={{ width: 400 }} />
                <br/>
                <br/>
                <Input placeholder=" Email *" id="email"  style={{ width: 400 }} />
                <br/>
                <br/>
                <Input placeholder=" Password  *" type="password" id="password"  style={{ width: 400 }} />
                <br/>
                <br/>
                <Input placeholder=" conform-Password  *" type="password" id="cpassword"  style={{ width: 400 }} />
                <br/>
                <br/>
                <br/>
                <br/>
                <Button type="primary" onClick={(event) => this.handleClick(event)}>Register</Button>
                <br/>
                <br/>
                <a href="/login1"><span>Already have an account?</span></a>.
              </Content>
              </Layout>
            </Layout>
            </Layout>);

        }
        handleClick(event) {
           var uname = $("#name").val();
           var uemail = $("#email").val();
           var pass = $("#password").val();
           var mob = $("#number").val();
           var confirm_pass = $("#cpassword").val();
           var phoneno = /^\d{10}$/;
           var re = /^[a-zA-Z0-9!@#$%^&*]{1,16}$/;
           if (!(mob.match(phoneno))) {
             alert("Enter a valid phone number");
           } else if (!(pass.match(re))) {
             alert("Enter a valid password");
           } else if (!(pass == confirm_pass)) {
             alert("missmatch in password");
           } else {
               axios.get('http://172.16.53.30:3000/signup', {
                 params:{
                 name: uname,
                 email: uemail,
                 phonenumber: mob,
                 psw: pass
               }
             })
             .then(function (response) {
               alert("sucessfully logged ");
               window.location.assign("http://localhost:3000/login1");

             })
             .catch(function (error) {
             });

           }
       }

      }


export default Register1;
