import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import CardConsole from './CardConsole';
import { useParams } from "react-router-dom";

const ConsoleContent = () => {
  const [consolesData, setConsolesData] = useState([]);
  const params = useParams()
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const initConfig = {
      method: "GET",
    };

    try {
      let response = await fetch(
        "http://localhost:5000/consoles",
        initConfig
      );
      let data = await response.json();
    
      console.log(data);

      setConsolesData(data);
    } catch (error) {}
  };

  return (
    <div>
      <h2>Toutes les Consoles de jeux</h2>
      <Container>
        <Row md="3" sm="2" xs="1" style={{margin:"auto"}}>
            {consolesData.map((console, index) => (
          <Col className="card-game">
              <CardConsole
                name={console.Name}
                description={console.Description}
                id={console.ID_console}
                img={console.Image} 
              />
          </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};
export default ConsoleContent