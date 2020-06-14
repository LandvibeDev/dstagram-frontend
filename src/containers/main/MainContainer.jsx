import React, { Component } from "react";
import { Container, CardColumns } from "react-bootstrap";
import CardView from "../../components/main/CardView";

class MainContainer extends Component {
  render() {
    return (
      <div>
        <Container style={{ padding: "1rem" }}>
          <CardColumns style={{ columnCount: 1, width: "70%" }}>
            <CardView imgSrc="/images/iu_1.jpg" />
            <CardView imgSrc="/images/iu_2.jpg" />
            <CardView imgSrc="/images/iu_3.jpg" />
          </CardColumns>
        </Container>
      </div>
    );
  }
}

export default MainContainer;
