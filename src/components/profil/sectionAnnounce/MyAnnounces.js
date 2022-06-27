import React, { useState, useEffect, Fragment } from "react";
import { Table, Button } from "reactstrap";
import AddAnnounces from "./AddAnnounces";
import DeleteMyAnnounce from "./DeleteMyAnnounce";
import "../../../css/profil/MyAnnounces.css";

const MyAnnounces = ({ uid }) => {
  console.log(uid);
  const [datasMyAnnounces, setDatasMyAnnounces] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    getData();
  }, [reload]);
  const getData = async () => {
    const initConfig = {
      method: "GET",
    };

    try {
      let response = await fetch(
        `http://localhost:5000/announces/user/${uid}`,
        initConfig
      );
      let data = await response.json();
      
      console.log(data);

      setDatasMyAnnounces(data);
    } catch (error) {}
  };
  const reloadProfile = () => setReload(!reload);

  return (
    <div className="myAnnounces">
      <h3>Tes Annonces</h3>
      <AddAnnounces uid={uid} reloadProfile={reloadProfile}/>
      <Table className="table table-dark table-hover">
        <thead>
          <tr>
            <th> index </th>
            <th> Titre </th>
            <th> Annonces </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {datasMyAnnounces.map((announceData, index) => (
            <tr>
              <th scope="row"> {index} </th>
              <td> {announceData.Title} </td>
              <td> {announceData.Description} </td>
              <td>

                <DeleteMyAnnounce uid={announceData.ID_user} reloadProfile={reloadProfile} announceId={announceData.ID_annonce}/>
              </td>
              
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyAnnounces;
