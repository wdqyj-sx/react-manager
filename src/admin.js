import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Navlist from "./component/Navlist";
import {Col,Row} from "antd";

export default class Admin extends React.Component {
    render(){
        return (
            <div>
                <Row>
                    <Col span={4}>
                        <Navlist></Navlist>
                    </Col>
                    <Col>
                        <Header></Header>
                        <Footer></Footer>
                    </Col>
                </Row>
            </div>
        )
    }
}