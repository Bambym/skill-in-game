import React from "react";
import { useNavigate } from "react-router-dom";
import { CardGroup,CardBody,CardTitle,CardText,Button,Card,CardImg } from "reactstrap";

const CardGame = ({ title, description, id, img }) => {
    let navigate = useNavigate()
    const handleClick =()=>{
        navigate(`game/${id}`);
    }
    return (
    <CardGroup>
      <Card id={id} >
        <CardImg alt={title} src={img} top width="100%" />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardText>{description}</CardText>
          <Button onClick={handleClick} type="submit">Trouvez les annonces</Button>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default CardGame;
