import React ,{useState,useEffect}from 'react'
import { Table} from "reactstrap";
import FriendRequest from "../FriendRequest";
import "../../../css/announce/announces.css"


const AllAnnounces = ({uid}) => {
    console.log(uid)
    const [datas, setDatas] = useState([]);
  
    useEffect(() => {
      getData();
    }, []);
    const getData = async () => {
      const initConfig = {
        method: "GET",
      };
  
      try {
        let response = await fetch(
          "http://localhost:5000/announces",
          initConfig
        );
        let data = await response.json();
       
        setDatas(data);
      } catch (error) {}
    };
    return (
      <div className='allAnnounces'>
      <h2>TOUTES LES ANNONCES</h2>
        <div className='tableAllAnnounces'>

      <Table className="table-dark">
        <thead>
          
            <tr>
              <th>index</th>
              <th>Username</th>
              <th>Annonces</th>
              <th>Console</th>
              <th>Jeux</th>
              <th></th>
            </tr>
          
        </thead>
        <tbody>
        {datas.map((data,index) => (
          <tr>
            <th scope="row">{index}</th>
            <td>{data.User.userName}</td>
            <td>{data.Description}</td>
            <td>{data.Console.Name}</td>
            <td>{data.game.Title}</td>
            <td>{data.User.ID_user!==uid ? <FriendRequest uid={uid} idUserAnnounce={data.User.ID_user}/>:""}</td>
          </tr>
        ))}
        </tbody>
      </Table>
        </div>
      </div>
    )
}

export default AllAnnounces