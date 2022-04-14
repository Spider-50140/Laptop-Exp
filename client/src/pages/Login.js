import React from 'react'
import { Row, Col, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userlogin } from '../redux/actions/useraction'
import axios from 'axios'
import Spinner from '../components/Spinner'

// for aos
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for style
// ..
AOS.init()

function Login() {
  const dispatch = useDispatch()
  const alertobj = useSelector((state) => state.ar)
  const loading = alertobj.loading

  function onfinish(val) {
    // calling userlogin function from useraction.js
    dispatch(userlogin(val))
    console.log(val)
  }

  return (
    // we will take 16 cols for car image and rest 8 cols for login form
    <div className='login'>
      {loading === true && <Spinner />}
      <Row glutter={16} className='d-flex align-items-center '>
        <Col lg={16} style={{ position: 'relative' }}>
          <img
            className='w-100'
            // for bringing image from right
            // data-aos='slide-right'
            // data-aos-duration='1500'
            // src='https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'

            src='https://i.ibb.co/6ZcrGc4/2560px-Happy-Cartoon-Man-At-Work-Using-A-Computer-svg-3.png'
          />
          {/* <h1 className='login-logo'>Book-my-laptop</h1> */}
        </Col>
        <Col lg={8} className='text-left p-5'>
          <Form
            layout='vertical'
            className='login-form p-5'
            onFinish={onfinish}
          >
            <h1>Login </h1>
            <hr />

            <Form.Item
              name='username'
              label='Username'
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name='password'
              label='Password'
              rules={[{ required: true }]}
            >
              <Input type='password' />
            </Form.Item>
            <button className='btn1 mt-2  '>Login</button>
            <hr />
            <Link to='/register'>Click Here to Register</Link>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Login
