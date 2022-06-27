import React, {Fragment, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {
    getAuth,
    
    onAuthStateChanged,
  
  } from "firebase/auth";


const PrivateRoute = ({render}) => {
    
    const auth = getAuth();
    let navigate = useNavigate()
    
    const [ authorized, setAuthorized]=useState(false)
    const [uid, setUid] = useState(null)

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if(user) {
                const uid = user.uid
                setAuthorized(true)
                setUid(uid)
            }else{
            navigate("/login")
          }
        });
      },[]) // equivalent d'un componentDidMount

    return (
        <>
            { authorized && 
                render(uid)
           } 
        </>
       
    )
;
};

export default PrivateRoute;
