import React, { Component } from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

class CardView extends Component {
  render() {
    const { imgSrc, title, text, lastupdated } = this.props;

    return (
      <Card>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{lastupdated}</small>
        </Card.Footer>
      </Card>
    );
  }
}

CardView.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  lastupdated: PropTypes.string,
};

CardView.defaultProps = {
  title: "untitled",
  text: "empty",
  lastupdated: "unknown",
};

export default CardView;
