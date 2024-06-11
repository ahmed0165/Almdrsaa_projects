import React from "react";
import { Form, Input, Button } from "antd";
import { useFormik } from "formik";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters long";
      }

      if (!values.confirmPassword) {
        errors.confirmPassword = "Required";
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Passwords do not match";
      }

      return errors;
    },
    onSubmit: (values) => {
      // Handle form submission here, e.g., send data to server
      console.log("Form submitted:", values);
    },
  });

  return (
    <Form
      name="signup"
      initialValues={{ remember: true }}
      onFinish={formik.handleSubmit}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
        validateStatus={formik.errors.email ? "error" : ""}
        help={formik.errors.email}
      >
        <Input
          placeholder="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
        validateStatus={formik.errors.password ? "error" : ""}
        help={formik.errors.password}
      >
        <Input.Password
          placeholder="Password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item
        name="confirmPassword"
        rules={[{ required: true, message: "Please confirm your password!" }]}
        validateStatus={formik.errors.confirmPassword ? "error" : ""}
        help={formik.errors.confirmPassword}
      >
        <Input.Password
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignupForm;
