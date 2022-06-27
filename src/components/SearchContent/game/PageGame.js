import React, {useState,useEffect} from "react";

import { Table,Button } from "reactstrap";
import { useParams } from "react-router-dom";
import ("../../../css/game/pageGame.css")


const PageGame = () => {
  const [datas, setDatas] = useState([]);
  const params = useParams();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const initConfig = {
      method: "GET",
    };
    console.log(params.jeuId);
    try {
      let response = await fetch(
        `http://localhost:5000/announces/jeu/${params.gameId}`,
        initConfig
      );
      let data = await response.json();
     
      console.log(data);

      setDatas(data);
    } catch (error) {}
  };
  return (
    
    <Table className="announceGame">
      <thead>
        
          <tr>
            <th>index</th>
            <th>Username</th>
            <th>Annonces</th>
            <th></th>
          </tr>
        
      </thead>
      <tbody>
      {datas.map((data,index) => (
        <tr>
          <th scope="row">{index}</th>
          <td>{data.User.ID_user}</td>
          <td>{data.Description}</td>
          <td><Button>demande d'ami</Button></td>
        </tr>
      ))}
      </tbody>
    </Table>
  );
};

export default PageGame;
