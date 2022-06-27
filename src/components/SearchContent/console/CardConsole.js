import React from "react";
import { useNavigate } from "react-router-dom";
import { CardGroup,CardBody,CardTitle,CardText,Button,Card,CardImg } from "reactstrap";

const CardConsole = ({ name, description, id, img }) => {
    let navigate = useNavigate()
    const handleClick =()=>{
        navigate(`console/${id}`);
    }
    return (
    <CardGroup>
      <Card id={id} >
        <CardImg  src={img} alt={name} top width="100%" />
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardText>{description}</CardText>
          <Button onClick={handleClick} type="submit">Trouvez les annonces</Button>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default CardConsole;
