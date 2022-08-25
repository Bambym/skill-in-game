import React, { Fragment, useEffect, useState } from "react";
import ModalUpdateUser from "./ModalUpdateUser";
import "../../../css/profil/pageProfil.css";

const PageProfil = ({uid}) => {

  console.log(uid)
  const [profilData, setProfilData] = useState([]);
  
  const [reload, setReload] = useState(true);
 
  useEffect(() => {
    getProfil();
  }, [reload, uid]);

  const getProfil = async () => {
    const initConfig = {
      method: "GET",
    };
    try {
      let response = await fetch(
        `http://localhost:5000/users/${uid}`,
        initConfig
      );
      let data = await response.json();

      console.log(data);

      setProfilData(data);
      
    } catch (error) {}
  };
  const reloadProfile = () => setReload(!reload);

  return (
    
    
    <div className="pageProfil">
      <h3>PROFIL</h3>
      {profilData.map((profil, index) => (
        <div className="myProfil">
          
          <p >
            Nom d'utilisateur : 
            {profil.userName === null ? (
              <>...</>
            ) : (
              " "+ profil.userName
            )}
          </p>
          <div>
            {profil.ID_user===uid ? (<ModalUpdateUser uid={uid} reloadProfile={reloadProfile}/>):(" ")}
          </div>
      
        </div>
      ))}
      
     
    </div>
  );
};

export default PageProfil;
