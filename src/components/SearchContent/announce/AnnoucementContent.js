import React, {useState,useEffect} from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "../../../css/announce/announces.css"




const AnnoucementContent = () => {
  let navigate = useNavigate()
    const handleClick =()=>{
        navigate(`allAnnounces`);
    }
 
  return (
    <div className="annoucementContent">
      
      <Button onClick={handleClick} type="submit">VOIR TOUTES LES ANNONCES</Button>

    </div>
  );
};

export default AnnoucementContent;

