import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import CardGame from "./CardGame";
import "../../../css/game/gameContent.css"
const GameContent = () => {
  const [gamesData, setGamesData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const initConfig = {
      method: "GET",
    };

    try {
      let response = await fetch(
        "http://localhost:5000/games",
        initConfig
      );
      let data = await response.json();
     
      console.log(data);

      setGamesData(data);
    } catch (error) {}
  };

  return (
    <div>
      <h2>TOUS LES JEUX</h2>
      <Container>
        <Row md="3" sm="2" xs="1" style={{margin:"auto"}}>
            {gamesData.map((game, index) => (
          <Col className="card-game">
              <CardGame
                title={game.Title}
                description={game.Description}
                img={game.image}
                id={game.ID_jeu}
              />
          </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default GameContent;
