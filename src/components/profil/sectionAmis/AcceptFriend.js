import React, { useEffect } from 'react'
import { Button } from 'reactstrap'

const AcceptFriend = ({friends,uid,relationId,reloadProfile}) => {
  console.log(relationId)
 
  
  const handleSubmit = async () => {
    console.log("handleSubmit");
    try {
      let relation = {
        id:{relationId},
        id_demandeur: {friends},
        id_receveur:{uid},
        statut: "2",
      };

      let myHeaders = new Headers({ "Content-Type": "application/json" });
      const initConfig = {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify(relation),
      };
      const response = await fetch(
        `http://localhost:5000/relation/update/${relationId}`,
        initConfig
      );
      const data = await response.json();
      reloadProfile();
      
    } catch (error) {
      const code = error.message;
      console.log(code);
    }
  };
  
  return (
    <div>
        <Button onClick={handleSubmit} color='success'>Accepter sa demande</Button>
    </div>
  )
}

export default AcceptFriend