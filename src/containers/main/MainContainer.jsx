import React, { Component } from "react";
import { Container, CardColumns } from "react-bootstrap";
import CardView from "../../components/main/CardView";

class MainContainer extends Component {
  render() {
    return (
      <main>
        <Container style={{ padding: "1rem" }}>
          <CardColumns style={{ columnCount: 1 }}>
            <CardView imgSrc="/images/iu_1.jpg" />
            <CardView imgSrc="/images/iu_2.jpg" />
            <CardView imgSrc="/images/iu_3.jpg" />
          </CardColumns>
        </Container>
      </main>
    );
  }
}

export default MainContainer;
