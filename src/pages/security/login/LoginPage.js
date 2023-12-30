import React from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { axiosApi, API } from "../../../lib/utils/axiosApi" 
import { useHistory } from 'react-router-dom';
import cookie from "js-cookie";


const LoginPage = () => {

    const history = useHistory();

    const saveStorage = (storage) => {
        localStorage.setItem('storage', JSON.stringify(storage))
        cookie.set('token', storage.token)
    }
    
    const onFinish = async (values) => {
      try {
        const {username, password} = values
        const response = await axiosApi.post(API.SECURITY.LOGIN, {username, password})
        const data_token = {
            ...response.data,
            token: response.data.access,
            user: response.data.user
        }
        saveStorage(data_token)
        location.href = '/video';
      } catch (error) {
        console.error(error)
        message.error('Auth failed');
      }
      
    };
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };



  return <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
};
export default LoginPage;