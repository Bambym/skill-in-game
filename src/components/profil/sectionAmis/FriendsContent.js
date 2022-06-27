import React, { useState, useEffect } from "react";
import FriendsList from "./FriendsList.js";
import AcceptFriend from "./AcceptFriend.js";
import ModalFriendProfile from "./ModalFriendProfile.js";
import "../../../css/myFriends/myFriends.css"

const FriendsContent = ({ uid }) => {
  console.log(uid);
  const [friendData, setFriendData] = useState([]);
  const [notFriendData,setNotFriendData] = useState([])

  const [reload, setReload] = useState(true);

  useEffect(() => {
    getFriendData();
    getNotFriendData();
  }, [reload,uid]);

  const getFriendData = async () => {
    const initConfig = {
      method: "GET",
    };
    try {
      let response = await fetch(
        `http://localhost:5000/relation/${uid}`,
        initConfig
      );
      let data = await response.json();

      console.log(data);

      setFriendData(data);
    } catch (error) {}
  };
  const getNotFriendData = async () => {
    const initConfig = {
      method: "GET",
    };
    try {
      let response = await fetch(
        `http://localhost:5000/relation/${uid}/getNotFriendsUser`,
        initConfig
      );
      let data = await response.json();

      console.log(data);

      setNotFriendData(data);
    } catch (error) {
      const code = error.message;
      console.log(code)
    }
  };
  const reloadProfile = () => setReload(!reload);
  console.log(uid);

  return (
    <div className="myFriends">
      <h3>Ta liste d'ami</h3>
     
        {friendData
          .filter((friend) => friend.id_demandeur === uid)
          .map((filteredFriend) => (
            <>
              <FriendsList friends={filteredFriend.id_receveur} />
              <ModalFriendProfile friends={filteredFriend.id_receveur} uid={uid}/>
            </>
          ))}
        {friendData
          .filter((friend) => friend.id_receveur === uid)
          .map((filteredFriend) => (
            <>
              <FriendsList friends={filteredFriend.id_demandeur} reloadProfile={reloadProfile}/>
              <ModalFriendProfile friends={filteredFriend.id_demandeur} uid={uid}/>
            </>
          ))}

      <h3>Demande d'ami en attente </h3>
        
      {notFriendData
          .filter((friend) => friend.id_receveur === uid)
          .map((filteredFriend) => (
            <>
            
              <FriendsList friends={filteredFriend.id_demandeur} key={filteredFriend.id} reloadProfile={reloadProfile}/>
              <AcceptFriend friends={filteredFriend.id_demandeur} uid={uid} relationId={filteredFriend.id} reloadProfile={reloadProfile}/>
              
            </>
          ))}

      
    </div>
  );
};

export default FriendsContent;
