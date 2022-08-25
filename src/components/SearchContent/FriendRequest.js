import React ,{useState,useEffect} from 'react'
import { Button,Alert } from 'reactstrap'

const FriendRequest = ({uid,idUserAnnounce}) => {
  const[friendRequestError,setFriendRequestError] = useState("")
    const handleSubmit = async () => {
        console.log("handleSubmit");
        try {
          let relation = {
            
            id_demandeur:`${uid}`,
            id_receveur:`${idUserAnnounce}`
           
          };
    
          let myHeaders = new Headers({ "Content-Type": "application/json" });
          const initConfig = {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(relation),
          };
          const response = await fetch(
            `http://localhost:5000/relation/createRelation`,
            initConfig
          );
          const data = await response.json();
          
        //   reloadProfile();
          
        } catch (error) {
          const code = error.message;
          console.log(error);
          let messageError = 
            code === "Validation error" && "la demande a déja été faite";
          setFriendRequestError(messageError);
        }
      };
    return (
    <>  
         <Button onClick={handleSubmit}>Demande d'ami</Button>
         {friendRequestError !== "" && <Alert color="danger">{friendRequestError}</Alert>}
    </>
  )
}

export default FriendRequest