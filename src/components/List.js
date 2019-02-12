import React,{Component} from 'react';
import {Route,Link,NavLink,Switch,Redirect,withRouter} from 'react-router-dom';

//引入JQ
import $ from 'jquery';

//引入自己的样式
import '../sass/list.scss';

class List extends Component{
    constructor(){
        super();
        this.state = {
            lists : []
        }
        // this绑定
        this.godetail = this.godetail.bind(this);
    }
    render(){
        return(
            <div className="list">
                <div className="listTop">
                    <div>
                        <Link to="/search">
                            <input type="text" placeholder="情人节"/>
                        </Link>
                        <div className="fa fa-search"></div>
                    </div>
                    <Link to="/category">取消</Link>
                </div>
                <div className="listBottom">
                    <div className="listFilter">
                        <div onClick={this.filterone}>
                            <span>上架时间</span>
                            <span className="fa fa-sort-up"></span>
                            <span className="fa fa-sort-down"></span>
                        </div>
                        <div onClick={this.filtertwo}>
                            <span>价格商品</span>
                            <span className="fa fa-sort-up"></span>
                            <span className="fa fa-sort-down"></span>
                        </div>
                        <div onClick={this.filterthree}>
                            <span>筛选</span>
                            <span className="fa fa-filter"></span>
                        </div>
                    </div>
                    <div className="lists">
                    {
                        this.state.lists.map(item=>{
                            return <div key={item.name} onClick={this.godetail}>
                                <img src={item.featureImage} alt={item.name} className={item.id}/>
                                <p className={item.id}>{item.brand.name}</p>
                                <p className={item.id}>{item.name}</p>
                                <div className={item.id}>
                                    <p className={item.id}>￥{item.price}</p>
                                    <p className={item.id}>.0</p>
                                </div>
                            </div>
                        })
                    }
                    </div> 
                </div>
            </div>
        )
    }
    componentDidMount(){
        var listKey = window.location.href;
        listKey = listKey.split('?')[1];
        listKey = listKey.split('=')[1];
        // console.log(listKey);
        // listKey = decodeURI(listKey);
        listKey = 'https://api.thebeastshop.com/app/search/keywords?keyword='+listKey+'&sortField=RELEASE&sortOrder=DESC&limit=20&offset=0'
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
            // console.log(res.data.items);
            var lis = res.data.items;
            this.setState({
                lists : lis
            });
        })
    }
    godetail(){

    }
}

export default List