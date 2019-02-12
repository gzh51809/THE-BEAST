import React,{Component} from 'react';
import {Link} from 'react-router-dom';

//引入图片
import photoLike from './../img/like.png';

//引入react的时间格式转换工具
import moment from 'moment';

//引入JQ
import $ from 'jquery';

//引入自己的样式
import '../sass/discovery.scss';

//引入swiper
let Swiper = window.Swiper;

class Discovery extends Component{
    constructor(){
        super();
        this.state = {
            discoverylists:[],
            dislist:[],
            disprice:'',
            disname:'',
            discommenturl:'',
            discommentname:'',
            discommentlike:'',
            discomment:'',
            discommenttime:'',
        }
    }
    render(){
        return(
            <div className="discovery">
                <div className="distop">
                    <div onClick={this.selectone} className="disselect disone">精选晒单</div>
                    <div onClick={this.selecttwo} className="distwo">封面故事</div>
                    <Link className="disicon fa fa-shopping-cart" to="/shopcart"/>
                </div>
                {
                    this.state.discoverylists.map(item=>{
                        return <div className="disbot" key={item.code}>
                            <div className="disban">
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                    {
                                        item.annex.images.map(ite=>{
                                            return <div key={ite.src} className="swiper-slide">
                                                <img src={ite.src} alt=""/>
                                            </div>
                                        })
                                    }
                                    </div>
                                    <div className="swiper-pagination dispag"></div>
                                </div>
                                {/* <span>/</span> */}
                                <div className="detail">
                                    <div>{'￥'+item.price}</div>
                                    <div>{'|'}</div>
                                    <div>{item.spvName}</div>
                                </div>
                            </div>
                            <div className="discomment">
                                <div>
                                    <div>
                                        <img src={item.evaluator.avatarUrl} alt="头像" className="headphoto"/>
                                        <span className="commentname">{item.evaluator.nickName}</span>
                                    </div>
                                    <div>
                                        <img src={photoLike} alt="收藏" className="heart"/>
                                        <span>{item.star.count}</span>
                                    </div>
                                </div>
                                <div>{item.content}</div>
                                <div>{moment(item.createTime).format("M月DD日")}</div>
                            </div>
                        </div>
                    })
                }
            </div>
        )
    }
    selectone(){
        $('.disone').addClass('disselect');
        $('.distwo').removeClass('disselect');
    }
    selecttwo(){
        $('.disone').removeClass('disselect');
        $('.distwo').addClass('disselect');
    }
    componentDidMount(){
        //请求数据的网址
        var url = "https://api.thebeastshop.com/app/shareOrder/evaluate?limit=20&offset=0"
        var option = {
            //请求类型
            methods:"get"
        }
        fetch(url,option).then((res)=>{
            return res.json()
        }).then((res)=>{
            // 请求到的数据
            // console.log(res.data.items[0].evaluator);
            var discoverylist = res.data.items[0].annex.images;
            var discoveryprice = res.data.items[0].price;
            var discoveryname = res.data.items[0].spvName;
            var commenturl = res.data.items[0].evaluator.avatarUrl;
            var commentname = res.data.items[0].evaluator.nickName;
            var commentlike = res.data.items[0].star.count;
            var comment = res.data.items[0].content;
            var commenttime = res.data.items[0].createTime;
            // console.log(res.data.items);
            var coverylists = res.data.items;
            this.setState({
                discoverylists : coverylists,
                dislist : discoverylist,
                disprice : discoveryprice,
                disname : discoveryname,
                discommenturl : commenturl,
                discommentname : commentname,
                discommentlike : commentlike,
                discomment : comment,
                discommenttime : commenttime
            })
        });

        var swiper = new Swiper('.swiper-container', {
            observer: true,
            observeParents: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            }
        });
    }
}

export default Discovery