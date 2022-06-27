import React from "react";
import { Button } from "reactstrap";

const DeleteMyAnnounce = ({uid,reloadProfile,announceId}) => {
  console.log(uid);
  const handleClick = async () => {
    try {
      const initConfig = {
        method: "DELETE",
      };
      const response = await fetch(
        `http://localhost:5000/announces/${announceId}`,
        initConfig
      );
      let data = await response.json();
      reloadProfile();
      
    } catch (error) {
      const code = error.message;
      console.log(code)
    }
  };
  return (
    <Button type="submit" onClick={handleClick} color="danger">
      Supprimez
    </Button>
  );
};
export default DeleteMyAnnounce;
