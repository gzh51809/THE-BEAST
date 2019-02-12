import React,{Component} from 'react';
import {Link} from 'react-router-dom';

//引入自己的样式
import '../sass/store.scss';

class Store extends Component{
    constructor(){
        super();
        this.state = {
            storelists:[],
            storecity:[],
            cities:[]
        }
    }
    render(){
        return(
            <div className="store">
                <div className="city">
                    <div>
                        <div>全国</div>
                        <div className="fa fa-caret-down"></div>
                    </div>
                    <div>
                        <div>全部品牌</div>
                    {
                        this.state.storelists.map(item=>{
                            return <div key={item.id}>{item.name}</div>
                        })
                    }
                    </div>
                </div>
                <div className="storecities">
                {
                    this.state.cities.map(item=>{
                        return <div key={item.address}>
                            <img src={item.imgApp.url} alt="" />
                            <p>{item.platformName}</p>
                            <p>{item.storeName}</p>
                            <p>{'营业时间 '+item.openTime}</p>
                            <p>{item.address}</p>
                            <div>
                                <div className="fa fa-phone"></div>
                                <div>{item.mobile}</div>
                            </div>
                            <div>
                                <div className="fa fa-map-marker-alt"></div>
                                <div>门店地图</div>
                            </div>
                        </div>
                    })
                }
                </div>
            </div>
        )
    }
    componentDidMount(){
        //请求数据的网址
        var url = "https://api.thebeastshop.com/appadmin/store/cityAndBrand"
        var option = {
            //请求类型
            methods:"get"
        }
        fetch(url,option).then((res)=>{
            return res.json()
        }).then((res)=>{
            // console.log(res.data.brands);
            // console.log(res.data.cities);
            var stolists = res.data.brands;
            var stocity = res.data.cities;
            this.setState({
                storelists : stolists,
                storecity : stocity
            })
        });

        //请求数据的网址
        var url = "https://api.thebeastshop.com/appadmin/store/search?cityId=&brandId=&lat=&lng="
        var option = {
            //请求类型
            methods:"get"
        }
        fetch(url,option).then((res)=>{
            return res.json()
        }).then((res)=>{
            // console.log(res.data);
            var Cities = res.data;
            this.setState({
                cities : Cities
            })
        });
    }
}   

export default Store