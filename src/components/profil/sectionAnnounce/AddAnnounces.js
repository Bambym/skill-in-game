import React, { useState, useEffect, Fragment } from "react";
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

const validationSchema = yup.object({
  Title: yup
    .string("Entrer un titre")

    .required("Un titre est requis")

    .min(5, "Le titre doit comporter au minimun 5 caractères"),
  Description: yup
    .string("Entrer une description")

    .required("Une description est requis")

    .min(20, "La description doit comporter au minimun 20 caractères"),
  ID_jeu: yup.string("Choisi un jeu").required("Selectionnez un jeu"),

  ID_console: yup
    .string("Choisi une console")
    .required("Sélectionnnez une console"),
});

const AddAnnounces = ({ uid,reloadProfile }) => {
  const [modal, setModal] = React.useState(false);
  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  const [isLoading, setIsLoading] = useState(false);

  const [dataGame, setDataGame] = useState([]);
  const [dataConsole, setDataConsole] = useState([]);

  useEffect(() => {
    getDataGame();
    getDataConsole();
  }, []);

  const getDataGame = async () => {
    const initConfig = {
      method: "GET",
    };

    try {
      let response = await fetch(`http://localhost:5000/games`, initConfig);
      let data = await response.json();

      console.log(data);
      handleClose();
      setDataGame(data);
      setIsLoading(false);
      reloadProfile()
    } catch (error) {}
  };
  const getDataConsole = async () => {
    const initConfig = {
      method: "GET",
    };

    try {
      let response = await fetch(`http://localhost:5000/consoles`, initConfig);
      let data = await response.json();

      console.log(data);
      handleClose();
      setDataConsole(data);
      setIsLoading(false);
      reloadProfile()
    } catch (error) {}
  };

  const handleSubmit = async () => {
    console.log(handleSubmit)
    try {
      let announce = {
        Title: formik.values.Title,
        Description: formik.values.Description,
        ID_user: `${uid}`,
        ID_jeu: formik.values.ID_jeu,
        ID_console: formik.values.ID_console,
      };

      let myHeaders = new Headers({ "Content-Type": "application/json" });
      const initConfig = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(announce),
      };
      const response = await fetch(
        "http://localhost:5000/announces/addAnnounce",
        initConfig
      );
      reloadProfile()
      setIsLoading(false);
      handleClose();
    } catch (error) {}
  };
  const formik = useFormik({
    initialValues: {
      Title: "",
      Description: "",
      ID_user: "",
      ID_jeu: "",
      ID_console:"",
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <Fragment>
      <Button onClick={handleOpen}>Ajouter des annonces</Button>

      <Modal isOpen={modal}>
        <Form onSubmit={formik.handleSubmit}>
          <ModalHeader isOpen={modal}>Enregistre ton annonce</ModalHeader>
          <ModalBody>
            <FormGroup row>
              <Label for="title" sm={2}>
                Titre
              </Label>
              <Col sm={10}>
                <Input
                  id="Title"
                  name="Title"
                  type="Title"
                  value={formik.values.Title}
                  onChange={formik.handleChange}
                  invalid={formik.touched.Title && Boolean(formik.errors.Title)}
                />
                <FormFeedback>{formik.errors.Title}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Description" sm={2}>
                Description
              </Label>
              <Col sm={10}>
                <Input
                  id="Description"
                  name="Description"
                  type="textarea"
                  value={formik.values.Description}
                  onChange={formik.handleChange}
                  invalid={
                    formik.touched.Description &&
                    Boolean(formik.errors.Description)
                  }
                />
                <FormFeedback>{formik.errors.Description}</FormFeedback>
              </Col>
            </FormGroup>
              <FormGroup>
                <Label for="ID_jeu">Sélectionne ton jeu</Label>
                <Input
                  id="ID_jeu"
                  value={formik.values.ID_jeu}
                  name="ID_jeu"
                  type="select"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  invalid={
                    formik.touched.ID_jeu &&
                    Boolean(formik.errors.ID_jeu)
                  }
                >
                  <option value="">Sélection ton jeu</option>
            {dataGame.map((game,index) => (
                  <option key={game.ID_jeu} value={game.ID_jeu}>{game.Title}</option>
                  
            ))}
                </Input>
                <FormFeedback>{formik.errors.ID_jeu}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="ID_console">Sélectionne ton jeu</Label>
                <Input
                  id="ID_console"
                  value={formik.values.ID_console}
                  name="ID_console"
                  type="select"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  invalid={
                    formik.touched.ID_console &&
                    Boolean(formik.errors.ID_console)
                  }
                >
                   <option value="">Sélection ta console</option>
            {dataConsole.map((console,index) => (
                  <option  key={console.ID_console} value={console.ID_console}>{console.Name}</option>
                  
            ))}
                </Input>
                <FormFeedback>{formik.errors.ID_console}</FormFeedback>
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
    </Fragment>
  );
};

export default AddAnnounces;
