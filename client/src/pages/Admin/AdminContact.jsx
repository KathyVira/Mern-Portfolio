import React from 'react'
import { Form, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { ShowLoading, HideLoading } from '../../redux/rootSlice'
import axios from 'axios'
import { message } from 'antd'

function AdminContact() {
  const dispatch = useDispatch()
  const { portfolioData } = useSelector((state) => state.root)
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading())
      const response = await axios.post('/api/portfolio/update-contact', {
        ...values,
        _id: portfolioData.contact._id,
      })
      dispatch(HideLoading())
      if (response.data.success) {
        message.success(response.data.message)
      } else {
        message.error(response.data.message)
      }
    } catch (error) {
      dispatch(HideLoading())
      message.error(error.message)
    }
  }
  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={portfolioData.contact}
      >
        <Form.Item name="name" label="The Name">
          <input placeholder="The Name" />
        </Form.Item>
        <Form.Item name="gender" label="Gender">
          <input placeholder="Gender" />
        </Form.Item>

        <Form.Item name="email" label="Email">
          <input placeholder="Email" />
        </Form.Item>
        <Form.Item name="mobile" label="Mobile">
          <input placeholder="Mobile" />
        </Form.Item>
        <Form.Item name="address" label="Address">
          <input placeholder="Address" />
        </Form.Item>
        <Form.Item name="languages" label="Languages">
          <input placeholder="Languages" />
        </Form.Item>
        <Form.Item name="lottieURL" label="Lottie URL">
          <input placeholder="Lottie URL" />
        </Form.Item>
        <Form.Item name="alt" label="Image Alt">
          <input placeholder="Image Alt" />
        </Form.Item>
        <div className="flex justify-end w-full">
          <button className="px-10 py-2 bg-primary text-white" type="submit">
            SAVE
          </button>
        </div>
      </Form>
    </div>
  )
}

export default AdminContact
