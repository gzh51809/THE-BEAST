import React,{Component} from 'react';
import {Link} from 'react-router-dom';

//引入antd
import { Accordion, List } from 'antd-mobile';

//引入JQ
import $ from 'jquery';

//引入自己的样式
import '../sass/detail.scss';

let Swiper = window.Swiper;

class Detail extends Component{
    constructor(){
        super();
        this.state = {
            detbanner:[],
            detbrandname:'',
            detname:'',
            detprice:0,
            detlabel:[],
            detlistsone:[],
            detliststwo:[],
        }
        // this绑定
        // this.anglechange = this.anglechange.bind(this);
    }
    render(){
        return(
            <div className="detail">
                <div className="detbanner">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                        {
                            this.state.detbanner.map(item=>{
                                return <div className="swiper-slide" key={item}>
                                    <img src={item} alt="" />
                                </div>
                            })
                        }
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                    <div className="detstarone far fa-star detblock" onClick={this.collet}></div>
                    <div className="detstartwo fas fa-star" onClick={this.nocollet}></div>
                </div>
                <p>{this.state.detbrandname}</p>
                <p>{this.state.detname}</p>
                <div>
                    <span>￥{this.state.detprice}</span>
                    <span>.0</span>
                </div>
                <div>
                {
                    this.state.detlabel.map(item=>{
                        return <div className="labels" key={item.summary}>
                            <div>{item.type}</div>
                            <div>{item.summary}</div>
                        </div>
                    })
                }
                </div>
                <div>正品保证 · 品牌授权</div>
                <div>商品详情</div>
                {
                    this.state.detlistsone.map(item=>{
                        return <div key={item.title}>
                        {item.modules[0].text}
                        </div>
                    })
                }
                {
                    this.state.detliststwo.map(item=>{
                        return <div key={item.title} className="detailparameter">
                            <div>{item.title}</div>
                            <div>{item.modules[0].text}</div>
                        </div>
                    })
                }
            </div>
        )
    }
    componentDidMount(){
        var produceID = window.location.href;
        produceID = produceID.split('/')[5];
        // console.log(produceID);

        //请求数据的网址
        var url = "https://api.thebeastshop.com/app/product/"+produceID
        var option = {
            //请求类型
            methods:"get"
        }
        fetch(url,option).then((res)=>{
            return res.json()
        }).then((res)=>{
            // 请求到的数据
            // console.log(res.data.labels);

            //轮播图数据
            var detailbanner = res.data.raw.images;
            var detailbrand = res.data.raw.brand.name;
            var detailname = res.data.raw.name;
            var detailprice = res.data.raw.price;
            var detaillabel = res.data.labels
            this.setState({
                detbanner : detailbanner,
                detbrandname : detailbrand,
                detname : detailname,
                detprice : detailprice,
                detlabel : detaillabel
            });
        })
        var swiper = new Swiper('.swiper-container', {
            observer: true,
            observeParents: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            }
        });

        //请求数据的网址
        var url2 = "https://api.thebeastshop.com/app/product/"+produceID+"/details?legacy=false"
        var option2 = {
            //请求类型
            methods:"get"
        }
        fetch(url2,option2).then((res2)=>{
            return res2.json()
        }).then((res2)=>{
            // console.log(res2.data.details);
            var detaillistsone = res2.data.details.slice(0,1);
            var detailliststwo = res2.data.details.slice(1,10);
            console.log(detailliststwo);
            this.setState({
                detlistsone : detaillistsone,
                detliststwo : detailliststwo
            });
        })
    }
    collet(){
        $('.detstartwo').addClass('detblock');
        $('.detstarone').removeClass('detblock');
    }
    nocollet(){
        $('.detstarone').addClass('detblock');
        $('.detstartwo').removeClass('detblock');
    }
}

export default Detail