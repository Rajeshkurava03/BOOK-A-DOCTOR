import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { message } from "antd";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/api/user/login",
        user
      );

      if (res.data.success) {
        message.success(res.data.message);

        localStorage.setItem("token", res.data.token);

        navigate("/userhome");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Login Failed");
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">

        <Col md={5}>
          <Card className="shadow">

            <Card.Body>

              <h2 className="text-center mb-4">
                Login
              </h2>

              <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3">

                  <Form.Label>Email</Form.Label>

                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={user.email}
                    onChange={handleChange}
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
                  />

                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                >
                  Login
                </Button>

              </Form>

              <div className="text-center mt-3">

                Don't have an account?

                <br />

                <Link to="/register">
                  Register Here
                </Link>

              </div>

            </Card.Body>

          </Card>
        </Col>

      </Row>
    </Container>
  );
}

export default Login;