import React,{Component} from 'react';
import {Link} from 'react-router-dom';

//引入自己的样式
import '../sass/mine.scss';

class Mine extends Component{
    constructor(){
        super();
        this.state = {
            myname:''
        }
    }
    render(){
        return(
            <div className="mine">
            欢迎回来，{this.state.myname}
            </div>
        )
    }
    componentDidMount(){
        let cook = document.cookie;
        var name = cook.split("=")[1];
        // console.log(name);
        this.setState({
            myname:name
        });
    }
}

export default Mine