import React from 'react';
import { Button } from "reactstrap";
import { getAuth, signOut } from 'firebase/auth';
import {  useNavigate } from 'react-router-dom';
const SignOut = () => {
    
    let navigate = useNavigate()
    
    const auth = getAuth()
    const handleClick = ()=>{
        signOut(auth)
        .then(()=>{
            navigate('/login')
        })
        .catch((error)=>{
            console.log(error);
        })
    }
  
  return <div>
    <Button color = 'warning' onClick={handleClick}>
        Se Déconnecter 
    </Button>

  </div>;
};

export default SignOut;
