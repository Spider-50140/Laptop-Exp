import { Col, Row, Form, Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Defaultlayout from '../components/Defaultlayout'
import Spinner from '../components/Spinner'
import { addCar } from '../redux/actions/caraction'

function AddCar() {
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.ar)

  const user = JSON.parse(localStorage.getItem('user'))
  const [show, setShow] = useState(false)
  let adminname = 'Satya'
  let adminpass = '934'
  const name = user.username
  const pass = user.password
  console.log(name)
  console.log(pass)

  useEffect(() => {
    if (name === adminname && pass === adminpass) {
      setShow(true)
    }
  }, [])

  console.log(show)

  function onFinish(values) {
    values.bookedTimeSlots = []

    dispatch(addCar(values))
    console.log(values)
  }

  return (
    <Defaultlayout>
      {loading && <Spinner />}
      <Row justify='center mt-5'>
        <Col lg={12} sm={24} xs={24} className='p-2'>
          <Form className='bs1 p-2' layout='vertical' onFinish={onFinish}>
            <h3>Add New Laptop</h3>
            <hr />
            <Form.Item
              name='name'
              label='Laptop name'
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name='image'
              label='Image url'
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name='Rent' label='Rent' rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name='Battery Backup'
              label='Battery Backup'
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name='Specs' label='Specs' rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <div className='text-right'>
              <button disabled={!show} className='btn1'>
                ADD Device
              </button>
            </div>
          </Form>
        </Col>
      </Row>
    </Defaultlayout>
  )
}

export default AddCar
