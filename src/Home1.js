import React, {Component} from 'react';
import $ from 'jquery';
import jQuery from 'jquery';
import 'antd/dist/antd.css';
import axios from 'axios';
import { Input } from 'antd';
import { Button, Radio} from 'antd';
import { Carousel } from 'antd';
import ReactDOM from 'react-dom';
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
      data: []
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
                <Menu.Item key="1">Mycart</Menu.Item>
                <Menu.Item key="2">WishLISt</Menu.Item>
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
              background: '#C0C0C0', padding: 24, margin: 0, minHeight: 750,
            }}
            >
              <Carousel autoplay>
                {
                  this.state.data.map((item) => <div><h1><a href={"products/"+item.id}>{item.name}</a></h1><br></br>
                  <h3> {item.price}</h3></div>)
                }
              </Carousel>
            </Content>
            </Layout>
          </Layout>
          </Layout>
    );
  }
}

export default Home1;
