import React, {Component} from 'react';
import $ from 'jquery';
import 'antd/dist/antd.css';
import axios from 'axios';
import { Input } from 'antd';
import { Button, Radio} from 'antd';
import ReactDOM from 'react-dom';
import { Carousel } from 'antd';
import { Layout, Menu, Breadcrumb, Icon,} from 'antd/es';
const { SubMenu } = Menu;
const { Header,Footer, Content, Sider } = Layout;

class Products extends Component {
    constructor(props){
       super(props);
       this.state = {
         name:'',
         price:'',
         id: '',
         description: '',
         category: '',
         data: []

     }
   }
   componentDidMount() {
     var id = window.location.href.split('/')[window.location.href.split('/').length - 1];
      console.log(id);
      var queryString = "http://172.16.53.30:3000/product/" + id;
      fetch(queryString).then(response =>
        response.json().then(data => ({
            data1: data,
            status: response.status

        })

    ).then(res => {
      console.log(res.status,res);
      console.log(res.data1.name);
      var productIt = (res.data1)
      console.log("<<<<<<", productIt)
      this.setState({ data: productIt })

        }));
      // $.getJSON(queryString)
      // .then(res => {
      // this.setState({ data: res });
      //   });

   }
   shouldComponentUpdate() {
     return true;}
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
               <Menu.Item key="1"><a href="/home1">User</a></Menu.Item>
               <Menu.Item key="2">My Cart</Menu.Item>
               <Menu.Item key="3">Wish List</Menu.Item>
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
                 <SubMenu key="sub1" title={<span><Icon type="user" />User</span>}>
                   <Menu.Item key="1"><a href="/home1">Home</a></Menu.Item>
                   <Menu.Item key="2">Mycart</Menu.Item>
                   <Menu.Item key="3">WishList</Menu.Item>

                 </SubMenu>
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
               }}>
                <div>
                 <h1>Product Details</h1>
                 <h2>Name: {this.state.data.name}</h2>
                 <h2>Category: {this.state.data.category}</h2>
                 <h2>Price: {this.state.data.price} </h2>
                  <h2>Description: {this.state.data.description}</h2>
                </div>
              </Content>
             </Layout>
           </Layout>
           </Layout>
         );

   }

  }

export default Products;
