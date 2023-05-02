import './loginpage.css';
import { Form, Input, Typography, Button, Divider, message } from "antd";
import { GoogleOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';
import axios from 'axios';
import App from '../App';
import Home from './Home';
const handlesubmit = () => {
  window.location.replace('/Home');
}

function Login() {

  const login = async (values) => {
    const { my_rollno, my_password, my_dept } = values;
    if (my_rollno === '2010991336' && my_password === 'umesh1336' && my_dept === 'CUIET') {
        handlesubmit();
    } else {
      message.error('Login failed');
    }
  }

  const validateRollno = (rule, value) => {
    return new Promise((resolve, reject) => {
      if (isNaN(value)) {
        reject('The Roll No must be a number');
      } else if (value < 2010990000 || value > 3000000000) {
        reject('Not a valid Roll No');
      } else {
        resolve();
      }
    });
  }

  return (
    <div className="appBg">
      <Form className='login_form' onFinish={login}>
        <Form.Item
          label='Roll No'
          name='my_rollno'
          rules={[
            {
              required: true,
              validator: validateRollno,
            }
          ]}
          validateStatus="error"
          help={value => (value ? value : null)}
        >
          <Input placeholder="Roll No" />
        </Form.Item>
        <Form.Item
          label='Password'
          name='my_password'
          rules={[{
            required: true,
            message: "Please enter your password"
          }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item label='Department' name='my_dept'>
          <Input placeholder="Department" />
        </Form.Item>
        <Button type='primary' htmlType='submit' block style={{ backgroundColor: '#fcfcdc', color:'black' }}>
          Log In
        </Button>
        <Divider style={{ borderColor: "black" }}>
          <b>Join us here:</b>
          <br />
          <div className='socialLogin'>
            <a href='https://www.chitkara.edu.in/'><GoogleOutlined className='socialicon1' /></a>
            <a href='https://twitter.com/ChitkaraU?t=Ia1IoX5uquz9R6V-kdBtMQ&s=09'><TwitterOutlined className='socialicon2' /></a>
            <a href='https://instagram.com/chitkarau?igshid=MjljNjAzYmU='> <InstagramOutlined className='socialicon3' /></a>
          </div>
        </Divider>
      </Form>
    </div>
  );
}

export default Login;