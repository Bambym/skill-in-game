import React from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

const FormContact = () => {
  return (
    
    <div className="formContact">

    <Form>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="name">Nom</Label>
            <Input
              id="name"
              name="name"
              placeholder="tapez votre nom"
              //   type="name"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="firstName">Prénom</Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="Tapez votre prénom"
              //   type="firstName"
            />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="city">Ville</Label>
            <Input id="city" name="city" placeholder="Mettez votre ville" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="state">Pays</Label>
            <Input id="state" name="state" placeholder="Mettez votre pays" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="title">Titre</Label>
        <Input id="title" name="title" placeholder="Votre titre" />
      </FormGroup>
      <FormGroup>
        <Label for="description">Message</Label>
        <Input
          id="description"
          name="description"
          type="textarea"
          placeholder="votre message"
        />
      </FormGroup>
      <Button color="light">Envoyez</Button>
    </Form>
    </div>
  );
};

export default FormContact;
