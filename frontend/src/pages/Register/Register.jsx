import React from "react";
import "./register.scss";
import { Form, Input, Button } from "antd";
import { userRegister } from "../../redux/callAPI";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    userRegister(values, navigate);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="register">
      <h1 className="registerHeader">Register</h1>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="registerForm"
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input className="input" placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input className="input" placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password className="input" placeholder="Password" />
        </Form.Item>
        <Form.Item
          name="cfPassword"
          rules={[
            {
              required: true,
              message: "Please input your cfpassword!",
            },
          ]}
        >
          <Input.Password className="input" placeholder="Confirm Password" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" className="button">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
