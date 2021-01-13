import React from "react";
import {Menu} from "antd";
import "./index.less";
import menuConfig from "../../../config/menuConfig";

const {SubMenu} = Menu;
export default class Navlist extends React.Component{
    state = {
        list:''
    }
    mapList = (navlist)=>{
        navlist.map((item)=>{
            if(item.children){
                this.mapList(item.children)
            }
            return 
        })
    }
    componentWillMount() {
       
    }
    render(){
        return (
            <div className="logo">
                <h1>简单管理系统</h1>
            </div>
        )
    }
}