import React, {useState,useEffect} from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    
  } from "reactstrap";


const ModalFriendProfile = ({friends,uid}) => {
    
    const [modal, setModal] = React.useState(false);
    const handleOpen = ()=> setModal(true)
    const handleClose = () => setModal(false);
    const [profilData, setProfilData] = useState([]);
  
 
  useEffect(() => {
    getProfil();
  }, [uid]);

  const getProfil = async () => {
    const initConfig = {
      method: "GET",
    };
    try {
      let response = await fetch(
        `http://localhost:5000/users/${friends}`,
        initConfig
      );
      let data = await response.json();

      console.log(data);

      setProfilData(data);
      
    } catch (error) {}
  };

  
    return (
    
    <>
      <Button onClick={handleOpen} size="sm" color='info'>Voir profil</Button>
    {profilData.map((profil, index) => (
      <Modal isOpen={modal}>
        
          <ModalHeader isOpen={modal}>Le profil de {profil.userName}</ModalHeader>
          <ModalBody>
            <div className="modalFriendProfile">
                
              
              <>
                <p style={{ color: "white" }}>ID = {profil.ID_user}</p>
                  <p>
                    Username =
                    {profil.userName === null ? (
                        <>...</>
                      ) : (
                        profil.userName
                      )}
                    </p>
                  
                
                  </>
              
                
              
              </div>
          </ModalBody>
          <ModalFooter>
            
            <Button onClick={handleClose}>Fermer</Button>
          </ModalFooter>
        
      </Modal>  
      ))}
    </>
  )
}

export default ModalFriendProfile