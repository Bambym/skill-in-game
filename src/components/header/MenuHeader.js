import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import MenuNav from "./MenuNav";
import "../../css/menu-header.css";
import monLogo from "../../img/monLogo.png";

export default class MenuHeader extends Component {
  render() {
    return (
      <><div id="menu-header">
        <Row>
          <Col xs={12}>
            <h1>SKILL IN GAME</h1>
          </Col>
        </Row>
        <Row>
          
            <Col md={3} xs={12} >
              <div id="logo">
                <img src={monLogo} alt="mon logo" />
              </div>
            </Col>
            <Col md={9} xs={12} className="menuNav">
              <div id="title-nav">
                <MenuNav />
              </div>
            </Col>
         
        </Row>
         </div>
      </>
    );
  }
}
