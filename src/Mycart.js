import React, {Component} from 'react';
import $ from 'jquery';
import 'antd/dist/antd.css';
import axios from 'axios';
import { Input } from 'antd';
import { Button, Radio} from 'antd';
import ReactDOM from 'react-dom';
import { Collapse } from 'antd';
import './style.css';
import { Carousel } from 'antd';
import { Layout, Menu, Breadcrumb, Icon,} from 'antd/es';
const { SubMenu } = Menu;
const { Header,Footer, Content, Sider } = Layout;

class Mycart extends Component {
    constructor(props){
       super(props);
       this.state = {
           name:'',
           price:'',
           id: '',
           wishListed: false,
           data: []
     }
   }
   componentDidMount() {
     var user_id=localStorage.getItem("id");
     var queryString = "http://172.16.53.30:3000/mycart/" +user_id;
     fetch(queryString).then(response =>
       response.json().then(data => ({
           data1: data,
           status: response.status

       })

   ).then(res => {
     const productIt=[];
     var n=res.data1.data.length;
     for(var i=0;i<n;i++ )
     {
     console.log("length",n);
     console.log(res.status,res);
     productIt[i] = (res.data1.data[i]);
     console.log("<<<<<<", productIt[i][0]);
     this.setState({ data: productIt[i][0] })
      }
       }));
     }
     shouldComponentUpdate() {
       return true;
     }

     addWishList = () => {
       this.setState({ wishListed: !this.state.wishListed })
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
                    <Menu.Item key="1"><a href="mycart">Mycart</a></Menu.Item>
                    <Menu.Item key="2"><a href="wishlist">WishLISt</a></Menu.Item>
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
                 <h1 className="hcenter">Your cart details</h1>
                 <Icon className="hcenter" type="heart" theme="filled" style={{color:'pink' }} onClick={(event)=>(this.addWishList())}/>
                 <div className= "data">
                  <h2><img src={this.state.data.imageurl}/></h2>
                  <h2>Name: &nbsp;&nbsp;&nbsp;{this.state.data.name}</h2>
                  <h2 className="category">Category:&nbsp;&nbsp; {this.state.data.category}</h2>
                  <h2>Price: &nbsp;&nbsp;&nbsp; {this.state.data.price} </h2>
                  <button onClick={(event) => this.order(event)}><Icon type="check-circle" theme="filled" /> &nbsp;&nbsp;Place Order</button>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button onClick={(event) => this.delete(event)}><Icon type="delete" theme="filled"/>Delete</button>
                 </div>
               </Content>
              </Layout>
            </Layout>
            </Layout>
          );
       }
       logout(event)
       {

          window.location.href="/login1";
       }
       order(event)
       {
         window.location="/order";
       }
       // delete(event)
       // {
       //  var ids=localStorage.getItem('id');
       //  console.log("id of user",ids);
       // }

      }


export default Mycart;
