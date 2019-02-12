import React,{Component} from 'react';
import {Link} from 'react-router-dom';

//引入图片
import photoLogo from './../img/logo.png';
import photoClose from './../img/close.png';
import photoCode from './../img/code.jpg'

//引入JQ
import $ from 'jquery';

//引入自己的样式
import '../sass/register.scss';

class Register extends Component{
    render(){
        return(
            <div className="register">
                <div className="reg">
                    <div className="regLogo">
                        <img src={photoLogo} alt="野兽派"/>
                        <p>注册成为THE BEAST TOWN新居民</p>
                        <Link to="/login">
                            <img src={photoClose} alt="关闭注册页" className="closereg"/>
                        </Link>
                    </div>
                    <div className="regmain">
                        <div>
                            <div>+86</div>
                            <div>中国大陆 ></div>
                        </div>
                        <form>
                            <input type="text" placeholder="请输入手机号"/>
                        </form>
                        <form>
                            <input type="text" placeholder="请输入图形验证码"/>
                            <img src={photoCode} alt="验证码" />
                        </form>
                        <form>
                            <input type="text" placeholder="请输入短信验证码"/>
                            <div className="regcode" onClick={this.getcode}>获取验证码</div>
                        </form>
                        <form>
                            <input type="password" placeholder="请输入密码"/>
                        </form>
                    </div>
                    <div className="regIn">注册</div>
                </div>
                <Link className="log" to="/login">已经是居民？去登录 ></Link>
            </div>
        )
    }
    getcode(){
        $('.regcode').text('1234');
    }
}

export default Register