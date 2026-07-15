import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { message } from "antd";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/api/user/register",
        user
      );

      if (res.data.success) {
        message.success(res.data.message);

        // Save JWT Token
        localStorage.setItem("token", res.data.token);

        // Redirect to User Dashboard
        navigate("/userhome");
      } else {
        message.error(res.data.message);
      }

    } catch (error) {
      console.log(error);
      message.error("Registration Failed");
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={5}>
          <Card className="shadow">

            <Card.Body>

              <h2 className="text-center mb-4">
                Register
              </h2>

              <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>

                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={user.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>

                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={user.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>

                  <Form.Control
                    type="text"
                    name="phone"
                    placeholder="Enter Phone Number"
                    value={user.phone}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>

                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={user.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className="w-100"
                >
                  Register
                </Button>

              </Form>

              <div className="text-center mt-3">
                Already have an account?
                <br />
                <Link to="/login">
                  Login Here
                </Link>
              </div>

            </Card.Body>

          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;