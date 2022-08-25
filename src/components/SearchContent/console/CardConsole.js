import React from "react";
import { useNavigate } from "react-router-dom";
import { CardGroup,CardBody,CardTitle,CardText,Button,Card,CardImg } from "reactstrap";
import "../../../css/console/cardConsole.css"

const CardConsole = ({ name, description, id, img }) => {
    let navigate = useNavigate()
    const handleClick =()=>{
        navigate(`console/${id}`);
    }
    return (
    <CardGroup >
      <Card className="cardConsole" id={id} >
        <CardImg className="imageConsole" src={img} alt={name} top width="100%" />
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardText>{description.slice(0,150)}...</CardText>
          <Button className="console" onClick={handleClick} type="submit">Trouvez les annonces</Button>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default CardConsole;
