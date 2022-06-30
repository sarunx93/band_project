import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";

import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import styled from "styled-components";

import { FaShoppingCart, FaAlignLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Wrapper>
      <Navbar bg="light" expand="sm" className="d-flex p-3 mb-3">
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />

          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-sm"
            aria-labelledby="offcanvasNavbarLabel-expand-sm"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1">
                <Nav.Link href="/" className="link">
                  Home
                </Nav.Link>
                <Nav.Link href="/all-musicians" className="link">
                  All Musicians
                </Nav.Link>
                <Nav.Link href="/dashboard" className="link">
                  Dashboard
                </Nav.Link>
              </Nav>
              <div className="cart-container">
                <Link to="/register">
                  <FaShoppingCart className="cart-icon" />
                </Link>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  .link {
    font-size: 2rem;
    margin-right: 3rem;
  }
  img {
    height: 6rem;
  }
  .cart-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cart-icon {
    font-size: 3rem;
  }
`;
export default NavbarComponent;
