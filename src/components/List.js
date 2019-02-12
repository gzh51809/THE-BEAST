import React,{Component} from 'react';
import {Route,Link,NavLink,Switch,Redirect,withRouter} from 'react-router-dom';

//引入自己的样式
import '../sass/list.scss';

class List extends Component{
    constructor(){
        super();
        this.state = {
            lists : []
        }
    }
    render(){
        return(
            <div className="list">
                列表页
            </div>
        )
    }
    componentDidMount(){
        var listKey = window.location.href;
        listKey = listKey.split('?')[1];
        listKey = listKey.split('=')[1];
        listKey = decodeURI(listKey);
        listKey = 'https://api.thebeastshop.com/app/search/associate?keyword='+listKey
        // console.log(listKey);
        //请求数据的网址
        var url = listKey
        var option = {
            //请求类型
            methods:"get"
        }
        fetch(url,option).then((res)=>{
            return res.json()
        }).then((res)=>{
            // 请求到的数据
            console.log(res.data);
            var lis = res.data;
            this.setState({
                lists : lis
            });
        })
    }
}

export default List