import React,{Component} from 'react';
import {Route,Link,withRouter} from 'react-router-dom';

//引入JQ
import $ from 'jquery';

//引入自己的样式
import '../sass/search.scss';

class Search extends Component{
    constructor(){
        super();
        this.state = {
            key:'',
            hot:[]
        }
        // this绑定
        this.write = this.write.bind(this);
    }
    render(){
        return(
            <div className="search">
                <div className="sear">
                    <form>
                        <input className="writekeyword" type="text" placeholder={this.state.key}  onKeyDown={this.write}/>
                        <div className="fa fa-search"></div>
                    </form>
                    <Link to="/category" className="searchCancal">取消</Link>
                </div>
                <div className="searchHistory">
                    <h2>搜索历史</h2>
                    <li>猪</li>
                    <div className="fa fa-trash-alt searchTrash" onClick={this.seatrach}></div>
                </div>
                <div className="hotSearch">
                    <h2>热门搜索</h2>
                    <div>
                    {
                        this.state.hot.map(item=>{
                            return <li key={item.name}>
                                {item.name}
                            </li>
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        //请求数据的网址
        var url = "https://api.thebeastshop.com/app/search/suggest"
        var option = {
            //请求类型
            methods:"get"
        }
        fetch(url,option).then((res)=>{
            return res.json()
        }).then((res)=>{
            // 请求到的数据
            // console.log(res.data.hotKeys);

            //搜索框显示的默认文字
            var keyword = res.data.keyword
            var hotkey = res.data.hotKeys
            this.setState({
                key : keyword,
                hot : hotkey
            });
        })
    }
    seatrach(){
        $('.searchHistory').css("display","none");
    }
    write(event){
        //获取键盘键值
        var keycode = event.keyCode;
        // console.log(keycode);
        if(keycode == 13){
            //搜索栏的keyword
            var searchKeyword = $('.writekeyword').val();
            // console.log(searchKeyword);
            if(searchKeyword){

            }else{
                searchKeyword = '情人节'
            }
            this.props.history.push('/list?keyword='+searchKeyword);
        } 
    }
}

// 利用withRouter高阶组件包装App组件
Search = withRouter(Search);

export default Search