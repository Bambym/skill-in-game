import React, { useState } from "react";
import {
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Button,
  Label,
  Alert
} from "reactstrap";
import {
  getAuth,
  signInWithEmailAndPassword,
  // signInWithPopup,
  // GoogleAuthProvider,
  // onAuthStateChanged,
} from "firebase/auth";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link , useNavigate } from "react-router-dom";
import("../../css/container-signIn.css");

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),

  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Login = () => {
 
  const navigate = useNavigate();
  const [ isLoading, setIsLoading ]= useState(false);
  const [signInError, setSignInError]  = useState('');

  const handleSubmit = ({email, password}) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        navigate(`/profil`)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error.message)
        setIsLoading(false)
        const errorCode = error.message;
        const errorMessage = errorCode === "Firebase: Error (auth/user-not-found)." && "Cet utilisateur n'existe pas";
        setSignInError(errorMessage)
      });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <div className="login">
     
      <div id="container">
        <div id="login">
          <Form className="signIn" onSubmit={formik.handleSubmit}>
            <h2>Sign In</h2>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                className="email"
                id="email"
                name="email"
                placeholder="with a placeholder"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                invalid={formik.touched.email && Boolean(formik.errors.email)}
              />
              <FormFeedback>{formik.errors.email}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="password">Mot de passe</Label>
              <Input
                className="password"
                id="password"
                name="password"
                placeholder="with a placeholder"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                invalid={
                  formik.touched.password && Boolean(formik.errors.password)
                }
              />
              <FormFeedback>{formik.errors.password}</FormFeedback>
            </FormGroup>
            <Button className="connexion" type="submit" disabled={isLoading}>
              Connexion
            </Button>
            <br/>
            <Link to="/signUp">Tu n'as pas de compte ! Inscris-toi.</Link>
            {signInError !== "" && (
              <Alert color="danger"> {signInError} </Alert>
            )}
          </Form>

        </div>
      </div>
    </div>
  );
};

export default Login;
