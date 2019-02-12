import React,{Component} from 'react';
import {Route,Link,NavLink,Switch,Redirect,withRouter} from 'react-router-dom';
import creatHistory from 'history/createHashHistory' 

//引入图片
import photoLogo from './../img/logo.png';

//引入JQ
import $ from 'jquery';

//引入自己的样式
import '../sass/login.scss';

class Login extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="login">
                <div className="log">
                    <img src={photoLogo} alt="野兽派" className="loginpic"/>
                    <p>亲爱的居民，欢迎回来</p>
                    <div className="loginchange">
                        <div className="logselect loginphone" onClick={this.lefttri}>手机号</div>
                        <div>|</div>
                        <div className="loginemail" onClick={this.righttri}>邮箱</div>
                        <div className="lefttri fa fa-caret-up logsele"></div>
                        <div className="righttri fa fa-caret-up"></div>
                    </div>
                    <div className="logphone logsele">
                        <div>
                            <div>+86</div>
                            <div>中国大陆 ></div>
                        </div>
                        <form>
                            <input type="text" placeholder="请输入手机号"/>
                            <input type="password" placeholder="请输入密码"/>
                        </form>
                    </div>
                    <div className="logemail">
                        <form>
                            <input type="text" placeholder="请输入邮箱"/>
                            <input type="password" placeholder="请输入密码"/>
                        </form>
                    </div>
                    <div className="forgetpassword">忘记密码</div>
                    <Link className="loginIn" to="/mine" onClick={this.logingo}>登录</Link>
                </div>
                <Link className="reg" to="/register">还不是居民？去注册 ></Link>
            </div>
        )
    }
    lefttri(){
        $('.lefttri').addClass('logsele');
        $('.righttri').removeClass('logsele');
        $('.loginphone').addClass('logselect');
        $('.loginemail').removeClass('logselect');
        $('.logphone').addClass('logsele');
        $('.logemail').removeClass('logsele');
    }
    righttri(){
        $('.righttri').addClass('logsele');
        $('.lefttri').removeClass('logsele');
        $('.loginemail').addClass('logselect');
        $('.loginphone').removeClass('logselect');
        $('.logemail').addClass('logsele');
        $('.logphone').removeClass('logsele');
    }
    logingo(){
        var logintime = new Date();
        logintime.setDate(logintime.getDate()+3);
        logintime.toUTCString();
        document.cookie = 'name=win;expires='+logintime;
    }
}

export default Login