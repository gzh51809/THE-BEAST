import React, { Component } from 'react';
import {Route,Link,NavLink,Switch,Redirect,withRouter} from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';

import PropTypes from 'prop-types';

import Home from './components/Home';
import Category from './components/Category';
import Discovery from './components/Discovery';
import Store from './components/Store';
import Mine from './components/Mine';
import Search from './components/Search';
import Shopcart from './components/Shopcart';
import List from './components/List';
import Login from './components/login';
import Register from './components/register';
import Detail from './components/Detail';

import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';

import './sass/app.scss';

class App extends Component {
  constructor(){
    super();
    this.state = {
      menu:[
        {
          text:'首页',
          path:'/home',
          name:'Home',
          icon:'home'
        },{
          text:'选购',
          path:'/category',
          name:'Category',
          icon:'bars'
        },{
          text:'发现',
          path:'/discovery',
          name:'Discovery',
          icon:'smile'
        },{
          text:'门店',
          path:'/store',
          name:'Store',
          icon:'shop'
        },{
          text:'我的',
          path:'/mine',
          name:'Mine',
          icon:'user'
        }
      ],
      current:'/home',
      token:''
    }
    // this绑定
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange({ item, key, keyPath }){
    //两个问题：1、如何获取路由路径，2、如何获取history对象
    this.setState({
        current:key
    });
    // console.log(this.props.history);
    this.props.history.push(key)
  }
  componentDidMount(){
    // 利用生命周期函数来保持当前路由高亮
    // 获取当前路由（hash,history）
    let hash = window.location.hash;// 可能得到的值：/home,/list,/list/computer
    hash = hash.split('/')[1];
    this.setState({
        current:'/'+hash
    })
  }
  componentDidUpdate(){
    let cook = document.cookie;
    let hash = window.location.hash;// 可能得到的值：/home,/list,/list/computer
    hash = hash.split('/')[1];
    if(hash === "mine"){
      cook.trim();
      if(cook){

      }else{
        //路由跳转
        this.props.history.push({pathname :"/login"}) 
      }
    }
  }
  render() {
    return (
      <div className="App">
        <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/category" component={Category}/>
            <Route path="/discovery" component={Discovery}/>
            <Route path="/store" component={Store}/>
            <Route path="/mine" component={Mine}/>
            <Route path="/search" component={Search}/>
            <Route path="/shopcart" component={Shopcart}/>
            <Route path="/list" component={List}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/detail" component={Detail}/>
            <Redirect from="/" to="/home"/>
        </Switch>
        <Menu
        mode="horizontal"
        selectedKeys={[this.state.current]}
        onClick={this.handleChange}
        >
            {
                this.state.menu.map(menu=>{
                    return (
                        <Menu.Item key={menu.path}>
                            <Icon type={menu.icon} className="icon"/>
                            <span className="text">{menu.text}</span>
                        </Menu.Item>
                    )
                })
            }
        </Menu>
      </div>
    );
  }

}

App.contextTypes = {
  router:PropTypes.object
}

// 利用withRouter高阶组件包装App组件
App = withRouter(App);

export default App;
