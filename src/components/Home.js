import React,{Component} from 'react';

import {Link} from 'react-router-dom';

//引入自己的样式
import '../sass/home.scss';

let Swiper = window.Swiper;

class Home extends Component{
    constructor(){
        super();
        this.state = {
            //轮播图
            banner:[],
            //新品上市
            newProduct:[
                {
                    id:'PROD001028251',
                    name:'The Beast×Le Petit Prince',
                    image:'https://img.thebeastshop.com/image/20190121123711259492.jpg@4e_0o_0l_345h_330w_90q.jpg'
                },{
                    id:'PROD001028290',
                    name:'THE BEAST',
                    image:'https://img.thebeastshop.com/image/20190125211732058949.jpg@4e_0o_0l_345h_330w_90q.jpg'
                },{
                    id:'PROD001028308',
                    name:'BEAST × GUERLAIN',
                    image:'https://img.thebeastshop.com/image/20190129172310732281.jpg@4e_0o_0l_345h_330w_90q.jpg'
                },{
                    id:'PROD001028295',
                    name:'BEAST × GUERLAIN',
                    image:'https://img.thebeastshop.com/image/20190125194050774661.jpg@4e_0o_0l_345h_330w_90q.jpg'
                },{
                    id:'PROD001028397',
                    name:'V&A & The Beast',
                    image:'https://img.thebeastshop.com/image/20190125175729079296.JPG@4e_0o_0l_345h_330w_90q.jpg'
                }
            ],
            //广告
            adv:[],
            //图片1(七张)
            one:[],
            //gif图(一张)
            gif:[],
            //图片2(八张)
            two:[],
            //图片3(一张)
            three:[],
            //图片4(三张)
            four:[],
            //图片5(一张)
            five:[],
            //图片6(一张)
            // six:[]
        }
    }
    render(){
        return(
            <div className="Home">
                <Link className="search fa fa-search" to="/search"/>
                <Link className="shoppingcar fa fa-shopping-cart" to="/shopcart"/>
                <span>/</span>
                <div className="home_banner">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                        {
                            this.state.banner.map(item=>{
                                return <div className="swiper-slide" key={item.sequence}>
                                    <img src={item.image.src} alt={item.trackTitle} />
                                </div>
                            })
                        }
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
                <div className="new_product">
                    <div>NEW ARRIVAL</div>
                    <div>
                    {
                        this.state.newProduct.map(item=>{
                            return <div key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <span>{item.name}</span>
                            </div>
                        })
                    }
                    </div>
                </div>
                <div className="adv">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                        {
                            this.state.adv.map(item=>{
                                return <div className="swiper-slide" key={item.sequence}>
                                    <img src={item.image.src} alt={item.trackTitle} />
                                </div>
                            })
                        }
                        </div>
                    </div>
                </div>
                <div className="pic_one">
                {
                    this.state.one.map(item=>{
                        return <div key={item.title}>
                            <img src={item.image.src} alt={item.trackTitle} />
                            <div className="smallBroke" style={{'background':item.items[0].textColor}}></div>
                            <p style={{'color':item.items[0].textColor}}>{item.items[0].text}</p>
                            <p style={{'color':item.items[1].textColor}}>{item.items[1].text}</p>
                        </div>
                    })
                }
                </div>
                <div className="pic_gif">
                {
                    this.state.gif.map(item=>{
                        return <img src={item.image.src} alt={item.trackTitle} key={item.title}/>
                    })
                }
                </div>
                <div className="pic_two">
                {
                    this.state.two.map(item=>{
                        return <div key={item.title}>
                            <img src={item.image.src} alt={item.trackTitle} />
                            <div className="smallBroke" style={{'background':'#000'}}></div>
                            <p style={{'color':'#000'}}></p>
                            <p style={{'color':'#000'}}></p>
                        </div>
                    })
                }
                </div>
                <div className="pic_three">
                {
                    this.state.three.map(item=>{
                        return <img src={item.image.src} alt={item.trackTitle} key={item.title}/>
                    })
                }
                </div>
                <div className="pic_four">
                {
                    this.state.four.map(item=>{
                        return <img src={item.image.src} alt={item.trackTitle} key={item.title}/>
                    })
                }
                </div>
                <div className="pic_five">
                {
                    this.state.five.map(item=>{
                        return <img src={item.image.src} alt={item.trackTitle} key={item.title}/>
                    })
                }
                </div>
                {/* <div className="pic_six">
                {
                    this.state.six.map(item=>{
                        return <img src={item.image.src} alt={item.trackTitle} key={item.title}/>
                    })
                }
                </div> */}
            </div>
        )
    }
    componentDidMount(){
        //请求数据的网址
        var url = "https://api.thebeastshop.com/app/index/getNewIndex"
        var option = {
            //请求类型
            methods:"get"
        }
        fetch(url,option).then((res)=>{
            return res.json()
        }).then((res)=>{
            // 请求到的数据
            // console.log(res.data.modules);

            //轮播图
            var ban = res.data.modules[0].data.items.slice(0,1);
            // console.log(ban);
            //广告
            var ban2 = res.data.modules[2].data.items.slice(0,2);
            //图片区1(七张)
            var pic_one = res.data.modules[3].data;
            var pic_two = res.data.modules[4].data;
            var pic_three = res.data.modules[5].data;
            var pic_four = res.data.modules[6].data;
            var pic_five = res.data.modules[7].data;
            var pic_six = res.data.modules[8].data;
            var pic_seven = res.data.modules[9].data;
            
            var pic_first = [];
            pic_first.push(pic_one,pic_two,pic_three,pic_four,pic_five,pic_six,pic_seven);
            //gif图
            var Gif = res.data.modules[10].data;
            var GIF = [];
            GIF.push(Gif);
            //图片2(八张)
            var pic2_one = res.data.modules[11].data;
            var pic2_two = res.data.modules[12].data;
            var pic2_three = res.data.modules[13].data;
            var pic2_four = res.data.modules[14].data;
            var pic2_five = res.data.modules[15].data;
            var pic2_six = res.data.modules[16].data;
            var pic2_seven = res.data.modules[17].data;
            var pic2_eight = res.data.modules[18].data;

            var pic_second = [];
            pic_second.push(pic2_one,pic2_two,pic2_three,pic2_four,pic2_five,pic2_six,pic2_seven,pic2_eight)
            //图片3(一张)
            var pic3 = res.data.modules[19].data;
            var Pic3 = [];
            Pic3.push(pic3);
            //图片4(三张)
            var pic4_one = res.data.modules[20].data;
            var pic4_two = res.data.modules[21].data;
            var pic4_three = res.data.modules[22].data;
            var Pic4 = [];
            Pic4.push(pic4_one,pic4_two,pic4_three);
            //图片5(一张)
            var pic5 = res.data.modules[23].data;
            var Pic5 = [];
            Pic5.push(pic5);
            //图片6(一张)
            // var pic6 = res.data.modules[24].data;
            // var Pic6 = [];
            // Pic6.push(pic6);
            // console.log(pic_second);



            this.setState({
                banner : ban,
                adv : ban2,
                one : pic_first,
                gif : GIF,
                two : pic_second,
                three : Pic3,
                four : Pic4,
                five : Pic5,
                // six : Pic6
            });
            // console.log(this.state.two);
            // 修改state
            // this.setState({
            //     arr:res
            // })
            // 打印输出
            // console.log(this.state.arr)
        })

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
export default Home