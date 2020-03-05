import React from 'react';
import { Form, Input, InputNumber, Button, Row, Col } from 'antd';

const SignUp = () => {
  const layout = {
    labelCol: { span: 9 },
    wrapperCol: { span: 6 },
  };

  const validateMessages = {
    required: 'This field is required!',
    types: {
      email: 'Not a validate email!',
      number: 'Not a validate number!',
    },
  };

  const onFinish = values => {
    console.log('Success:', values);
  };

  return (
    <Row style={{ marginTop: '50px' }}>
      <Col span={24}>
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number' }]}>
            <InputNumber />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 14 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>);
};

export default SignUp;
