import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import { logoutUser } from "../features/user/userSlice";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import styled from "styled-components";

import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const NavbarComponent = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [showLogout, setShowLogout] = useState(false);
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
                <Nav.Link href="/dashboard" className="link dashboard-link">
                  Dashboard
                </Nav.Link>

                <NavDropdown title="Dashboard" id="nav-dropdown">
                  <NavDropdown.Item href="/dashboard/see-bands">
                    see bands
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/dashboard/profile">
                    profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/dashboard/create-band">
                    create a band
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <div className="btn-container">
                {user ? (
                  <>
                    <button
                      type="button"
                      className="btn"
                      onClick={() => setShowLogout(!showLogout)}
                    >
                      <FaUserCircle />
                      {user?.name}
                      <FaCaretDown />
                    </button>
                    <div
                      className={
                        showLogout ? "dropdown show-dropdown" : "dropdown"
                      }
                    >
                      <button
                        className="dropdown-btn"
                        onClick={() => dispatch(logoutUser())}
                      >
                        logout
                      </button>
                    </div>
                  </>
                ) : (
                  <button className="btn">
                    <Link to="/register">login/register</Link>
                  </button>
                )}
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
  .btn-container {
    position: relative;
  }
  .user-icon {
    font-size: 3rem;
  }
  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }
`;
export default NavbarComponent;
