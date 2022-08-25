import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Form,
  Label,
  Input,
  Col,
  FormFeedback,
} from "reactstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import "../../../css/profil/modalUpdateUser.css"

const validationSchema = yup.object({
  username: yup
    .string("Entrer un username")

    .required("Un username est requis")

    .min(6, "La description doit comporter au minimun 6 caractères"),
});

const ModalUpdateUser = ({ uid, reloadProfile, username }) => {
  const [modal, setModal] = React.useState(false);
  const handleOpen = ()=> setModal(true)
  const handleClose = () => setModal(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    console.log("handlesubmit");
    try {
      let user = {
        ID_user: { uid },
        username: formik.values.username,
      };

      let myHeaders = new Headers({ "Content-Type": "application/json" });
      const initConfig = {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify(user),
      };
      const response = await fetch(
        `http://localhost:5000/users/update/${uid}`,
        initConfig
      );
      const data = await response.json();
      reloadProfile();
      setIsLoading(false);
      handleClose();
    } catch (error) {
      const code = error.message;
      console.log(code);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <div className="buttonMaj">
      <Button className="maj" onClick={handleOpen}>Mise à Jour</Button>

      <Modal isOpen={modal}>
        <Form onSubmit={formik.handleSubmit}>
          <ModalHeader isOpen={modal}>Mets à jour ton Profil</ModalHeader>
          <ModalBody>
            <FormGroup row>
              <Label for="username" sm={2}>
                Username
              </Label>
              <Col sm={10}>
                <Input
                  id="username"
                  name="username"
                  type="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  invalid={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                />
                <FormFeedback>{formik.errors.username}</FormFeedback>
              </Col>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit" disable={isLoading}>
              Valider
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalUpdateUser;
