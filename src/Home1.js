import React, {Component} from 'react';
import $ from 'jquery';
import jQuery from 'jquery';
import 'antd/dist/antd.css';
import axios from 'axios';
import './style.css';
import { Input } from 'antd';
import { Button, Radio} from 'antd';
import { Carousel } from 'antd';
import ReactDOM from 'react-dom';
import Storage from 'local-session-storage';
import { Layout, Menu, Breadcrumb, Icon,} from 'antd/es';
const { SubMenu } = Menu;
const { Header,Footer, Content, Sider } = Layout;

 class Home1 extends Component {
    constructor() {
    super();
    this.state = {
      name:'',
      price:'',
      id: '',
      data: [],
      imageurl:'',
    };
  }

  componentDidMount() {

  //   fetch('http://172.16.53.30:3000/showproducts')
  //   .then(function(response) { return response.json(); })
  // .then(function(data) {
  // this.setState({
  //   name: data.name
  // })
  // });

    fetch('http://172.16.53.30:3000/showproducts').then(response =>
      response.json().then(data => ({
          data: data,
          status: response.status

      })

  ).then(res => {
    console.log(res.status, res);
    var productItems = JSON.parse(res.data.items)
    console.log("<<<<<<", productItems)
    this.setState({ data: productItems })
  }));
}
    shouldComponentUpdate() {
      return true;}
    render() {
      console.log(this.state.data);
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">User</Menu.Item>
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
              <SubMenu key="sub1" title={<span><Icon type="user" />User</span>}>
                <Menu.Item key="1"><a href="/mycart">Mycart</a></Menu.Item>
                <Menu.Item key="2"><a href="/wishlist">WishLISt</a></Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />Site</span>}>
                <Menu.Item key="3"onClick={(event) => this.help(event)}>Help</Menu.Item>
                <Menu.Item key="4"onClick={(event) => this.about(event)}>About</Menu.Item>
                <Menu.Item key="5" onClick={(event) => this.contact(event)}>Contact US</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
           <Content style={{
              background: '#C0C0C0', padding: 24, margin: 0, minHeight: 1000,
            }}
            >
              <Carousel >
                {
                  this.state.data.map((item) => <div><img className='imgstyle' src={item.imageurl}></img><h1><a href={"products/"+item.id}>{item.name}</a></h1><br></br>
                <h3> {item.price}</h3></div>)
                }
              </Carousel>
            </Content>
            </Layout>
          </Layout>
          </Layout>
    );
  }
  logout(event)
  {
     Storage.Local.remove('objname')
     window.location.href="/login1";
  }
  help(event)
  {
    window.location.href="/help";
  }
  about(event)
  {
      window.location.href="/about";
  }
  contact(event)
  {
    window.location.href="/contact";
  }
}

export default Home1;
