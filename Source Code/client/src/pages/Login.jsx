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

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // Normal Login
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

        if (user.email === "raj@gmail.com") {
          navigate("/adminhome");
        } else {
          navigate("/userhome");
        }
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Login Failed");
    }
  };

  // One Click Admin Login
  const adminLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/user/login",
        {
          email: "raj@gmail.com",
          password: "asdfghjkl",
        }
      );

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);

        message.success("Admin Login Successful");

        navigate("/adminhome");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Admin Login Failed");
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
                  className="w-100 mb-2"
                >
                  Login
                </Button>

                <Button
                  variant="dark"
                  className="w-100"
                  type="button"
                  onClick={adminLogin}
                >
                  👨‍💼 Login as Admin
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