import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import FriendRequest from "../FriendRequest";
import ("../../../css/console/announceConsole.css")


const AnnouceConsole = ({uid}) => {

  console.log(uid)
  const [datasAnnounceConsole, setDatasAnnounceConsole] = useState([]);
  const params = useParams();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const initConfig = {
      method: "GET",
    };
    console.log(params.consoleId);
    try {
      let response = await fetch(
        `http://localhost:5000/announces/console/${params.consoleId}`,
        initConfig
      );
      let data = await response.json();
      
      console.log(data);
      
      setDatasAnnounceConsole(data);
        
    } catch (error) {}
  };
  return (
    <Table className="announceConsole">
      <thead>
        <tr>
          <th> index </th>
          <th> Titre de l'annonce </th>
          <th> Annonces </th>
          <th> Jeu </th>
          <th> Console </th>
          <th> Utilisateur </th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
      {/* {datasAnnounceConsole.map((gameData, index) => (gameData.annonces.map((annonce,index)=>( */}

        {datasAnnounceConsole.map((announceData, index) => (
          <tr>
            <th scope="row"> {index} </th>
            <td > {announceData.Title} </td>
            <td > {announceData.Description} </td>
            <td > {announceData.game.Title} </td>
            <td > {announceData.Console.Name} </td>
            <td > {announceData.User.userName} </td>
            <td>
              {announceData.User.ID_user!==uid ? <FriendRequest uid={uid} idUserAnnounce={announceData.User.ID_user}/>:""}
            </td>
          </tr>
        ))}

        
        
      </tbody>
    </Table>
  );
};

export default AnnouceConsole;
