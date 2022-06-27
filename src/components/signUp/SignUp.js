import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
  Alert,
} from "reactstrap";

import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import * as yup from "yup";
import "../../css/signUp.css";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  confirmEmail: yup
    .string("Enter your email")
    .oneOf([yup.ref("email")], "c'est pas le même email guys")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmPassword: yup
    .string("Enter your password")
    .oneOf([yup.ref("password")], "c'est pas le même password guys")
    .required("Password is required"),
});

const SignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [signUpError, setSignUpError] = useState("");

  const handleSubmit = async ({ email, password }) => {
    //   const auth = getAuth();
    //   createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //       // Signed in
    //       const user = userCredential.user;
    //       console.log(user)
    //       let id = user.uid
    //       navigate(`/user/${id}/profil`)
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       // ..
    //     });
    // };
    try {
      setIsLoading(true);
      const auth = getAuth();
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      let user = {
        ID_user: userCredentials.user.uid,
        email: userCredentials.user.email,
      };
      console.log(user);
      let myHeaders = new Headers({ "Content-Type": "application/json" });
      const initConfig = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(user),
      };
      const response = await fetch(
        `http://localhost:5000/users/signUp`,
        initConfig
      )
      const data = await response.json();
      console.log(data);
      setIsLoading(false);

      navigate("profil");
    } catch (error) {
      const code = error.message;
      console.log(error);
      setIsLoading(false);
      let messageError =
        code === "Firebase: Error (auth/email-already-in-use)." &&
        "L'utilisateur existe déjà";
      setSignUpError(messageError);
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <div className="bg-sign-up">
      <Form className="signUp" onSubmit={formik.handleSubmit}>
        <h2>SIGN UP</h2>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            className="email"
            id="email"
            name="email"
            placeholder="entrez votre email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            invalid={formik.touched.email && Boolean(formik.errors.email)}
          />
          <FormFeedback>{formik.errors.email}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="confirmEmail">Confirmez votre Email</Label>
          <Input
            className="confirmEmail"
            id="confirmEmail"
            name="confirmEmail"
            placeholder="confirmez votre Email"
            type="confirmEmail"
            value={formik.values.confirmEmail}
            onChange={formik.handleChange}
            invalid={
              formik.touched.confirmEmail && Boolean(formik.errors.confirmEmail)
            }
          />
          <FormFeedback>{formik.errors.confirmEmail}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            className="password"
            id="password"
            name="password"
            placeholder="entrez un password "
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            invalid={formik.touched.password && Boolean(formik.errors.password)}
          />
          <FormFeedback>{formik.errors.password}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="confirmPassword">Confirmez votre Password</Label>
          <Input
            className="confirmPassword"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="confirmez votre password"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            invalid={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
          />
          <FormFeedback>{formik.errors.confirmPassword}</FormFeedback>
        </FormGroup>

        <Button className="inscription" type="submit" disabled={isLoading}>
          S'inscrire
        </Button>
        <br />
        <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
          Vous avez déja un compte ? Connectez-vous
        </Link>
        {signUpError !== "" && <Alert color="danger"> {signUpError} </Alert>}
      </Form>
    </div>
  );
};

export default SignUp;
