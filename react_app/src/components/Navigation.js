import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col>
              <Navbar>
                <Container>
                  <Navbar.Brand>
                    <img
                      src="favicon.ico"
                      alt="img"
                      height="40px"
                      width="40px"
                      className="align-top"
                    ></img>
                  </Navbar.Brand>
                </Container>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>
      <h1>Navigation Page</h1>
    </>
  );
};

export default Navigation;
