import React from "react";
import { useNavigate } from "react-router-dom";
import { CardGroup,CardBody,CardTitle,CardText,Button,Card,CardImg } from "reactstrap";
import "../../../css/game/cardGame.css"

const CardGame = ({ title, description, id, img }) => {
    let navigate = useNavigate()
    const handleClick =()=>{
        navigate(`game/${id}`);
    }
    return (
    <CardGroup>
      <Card className="cardGame" id={id} >
        <CardImg alt={title} src= {img} top width="100%" />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardText>{description}</CardText>
          <Button className="game" onClick={handleClick} type="submit">Trouvez les annonces</Button>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default CardGame;
