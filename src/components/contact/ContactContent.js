import React from "react";
import { Container, Row, Col } from "reactstrap";
import ContactMe from "./ContactMe";
import FormContact from "./FormContact";
import "../../css/contact/contactContent.css"

const ContactContent = () => {
  return (
    <div className="contactContent">
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <ContactMe />
          </Col>
          <Col sm={12} md={6}>
            <FormContact />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactContent;
