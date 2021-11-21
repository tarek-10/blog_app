import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/home">Post Blogs</Navbar.Brand>
            <Nav className=" ml-auto ">
              <Nav.Link href="/home" className="navStyle">
                Home
              </Nav.Link>
              <Nav.Link href="/posts">posts</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <div className="jumbotron head d-flex align-item-center justify-content-center">
          <h1 className="header-title">Hello React</h1>
        </div>
      </>
    );
  }
}
