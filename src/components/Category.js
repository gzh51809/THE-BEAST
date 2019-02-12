import React,{Component} from 'react';
import {Link} from 'react-router-dom';

//引入JQ
// import $ from 'jquery';

//引入antd-mobile
// import { TabBar } from 'antd-mobile';

//引入自己的样式
import '../sass/category.scss';
// import Item from 'antd/lib/list/Item';

class Category extends Component{
    constructor(){
        super();
        this.state = {
            category:[],
            current: "推荐",
            currentIndex: 0,
            list:[]
        }
        this.selectone = this.selectone.bind(this)
    }
    selectone(eve) {
        this.setState({
            current: (eve.currentTarget.children[0].innerHTML),
            currentIndex: index
        });
        var elt = eve.currentTarget;
        var index = [].indexOf.call(elt.parentNode.querySelectorAll(elt.tagName),elt);
        // console.log(index);
        // console.log(eve.currentTarget.children[0].innerHTML);

         //请求数据的网址
         var url = "https://api.thebeastshop.com/app/index/classifyDataV2"
         var option = {
             //请求类型
             methods:"get"
         }
         fetch(url,option).then((res)=>{
             return res.json()
         }).then((res)=>{
             var lists = res.data.modules[index].data.subCategory;
            //  console.log(lists);
             this.setState({
                list : lists
             })
         });


    }
    render(){
        return(
            <div className="category">
                <div className="search_">
                    <Link className="sear" to="/search">
                        <div className="fa fa-search"></div>
                        <div>猪</div>
                    </Link>
                    <Link className="icon fa fa-shopping-cart" to="/shopcart"/>
                </div>
                <div className="content">
                    <div className="cate">
                    {
                        this.state.category.map(item=>{
                            return <div key={item.data.title} onClick={this.selectone} className="currentindex">
                                <p className={this.state.current===item.data.title ? 'sele' : ''}>{item.data.title}</p>
                            </div>
                        })
                    }
                    </div>
                    <div className="cont">
                    {
                        this.state.list.map(item=>{
                            return <div key={item.title}>
                                <img src={item.image.src} alt={item.tile} className="contpic"/>
                                <span className="conttext">{item.title}</span>
                            </div>
                            
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        //请求数据的网址
        var url = "https://api.thebeastshop.com/app/index/classifyDataV2"
        var option = {
            //请求类型
            methods:"get"
        }
        fetch(url,option).then((res)=>{
            return res.json()
        }).then((res)=>{
            // 请求到的数据
            // console.log(res.data.modules);
            var cate = res.data.modules;
            var lists = res.data.modules[this.state.currentIndex].data.subCategory;
            // console.log(lists);
            this.setState({
                category : cate,
                list : lists
            })
        });
        
    }
}

export default Category