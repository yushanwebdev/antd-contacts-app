import React from "react";
import PropTypes from "prop-types";
import { Button, Drawer, Form, Input } from "antd";

const AddDrawer = ({
  show,
  handleOnClose,
  handleOnFinish,
  handleOnFinishFailed,
}) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: null,
  };
  return (
    <Drawer
      title="Add Contact"
      visible={show}
      onClose={handleOnClose}
      maskClosable={false}
      data-testid="add-contact-drawer"
      width={412}
    >
      <Form
        name="basic"
        initialValues={initialValues}
        onFinish={handleOnFinish}
        onFinishFailed={handleOnFinishFailed}
      >
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please input your first name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please input your last name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input type="tel" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

AddDrawer.propTypes = {
  show: PropTypes.bool.isRequired,
  handleOnClose: PropTypes.func.isRequired,
  handleOnFinish: PropTypes.func.isRequired,
  handleOnFinishFailed: PropTypes.func.isRequired,
};

export default AddDrawer;
