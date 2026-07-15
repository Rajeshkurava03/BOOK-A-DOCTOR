import React from "react";
import { Container, Navbar, Nav, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>MediCareBook</Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>

              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <Container className="mt-5">
        <Row className="align-items-center">

          <Col md={6}>
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=700"
              alt="Doctor"
              className="img-fluid rounded"
            />
          </Col>

          <Col md={6}>
            <h1 className="display-4">
              Book Your Doctor Online
            </h1>

            <p className="mt-3">
              Easily book appointments with experienced doctors.
              Manage appointments, receive notifications,
              and access healthcare from anywhere.
            </p>

            <Button
              as={Link}
              to="/login"
              variant="primary"
            >
              Book Your Doctor
            </Button>
          </Col>

        </Row>
      </Container>

      {/* About Section */}
      <Container className="mt-5 mb-5">
        <h2>About Us</h2>

        <p>
          MediCareBook is an online doctor appointment booking
          system developed using the MERN Stack.
        </p>

        <p>
          Patients can register, search doctors,
          book appointments, and receive notifications.
        </p>

        <p>
          Doctors can manage appointments,
          while administrators approve doctor registrations.
        </p>
      </Container>

      {/* Footer */}
      <footer
        className="bg-dark text-white text-center p-3"
      >
        © 2026 MediCareBook
      </footer>
    </>
  );
}

export default Home;