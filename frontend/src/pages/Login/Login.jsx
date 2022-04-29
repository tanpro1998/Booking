import React from "react";
import "../Register/register.css";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { userLogin } from "../../Redux/API";

const Login = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(userLogin(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="register">
      <h1 className="registerHeader">Login</h1>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="registerForm"
      >
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

export default Login;
