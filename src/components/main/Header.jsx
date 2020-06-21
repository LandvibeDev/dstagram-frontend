import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavDropdown } from "react-bootstrap";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Header">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <NavbarBrand>
            <img
              alt=""
              src="/images/instagram.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {" dstargram "}
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default Header;
