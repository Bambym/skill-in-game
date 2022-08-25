import React, { Component, useEffect, useState, Fragment } from "react";
import PageProfil from "./sectionProfil/pageProfil";
import MyAnnounces from "./sectionAnnounce/MyAnnounces";
import FriendsContent from "./sectionAmis/FriendsContent";
import "../../css/profil/profil.css";

// import { getAuth , onAuthStateChanged } from 'firebase/auth'

const Profil = ({ uid }) => {
  console.log(uid);
  // const auth = getAuth()
  // const [uid,setUid]=useState(null)

  // useEffect(()=>{
  //     onAuthStateChanged(auth, (user) => {
  //         if(user){
  //             const currentUser = user.uid
  //             if(uid===null){
  //                 setUid(currentUser)
  //             }
  //         }
  //     })
  // },[])

  return (
    <div className="profil">
      <h2>TABLEAU DE BORD</h2>
      <div className="contentProfil">
        

        <div className="row">
          <div className="col-md-2">
            <PageProfil uid={uid} />
          </div>
          <div className="col-md-8">
            <MyAnnounces uid={uid} />
          </div>
          <div className="col-md-2">
            <FriendsContent uid={uid} />
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Profil;
