import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Navlist from "./component/Navlist";
import {Col,Row} from "antd";
import "./admin.less";

export default class Admin extends React.Component {
    render(){
        return (
            <div>
                <Row>
                    <Col span={4} className="left">
                        <Navlist></Navlist>
                    </Col>
                    <Col span={20} className="right">
                        <Header></Header>
                        <Footer></Footer>
                    </Col>
                </Row>
            </div>
        )
    }
}