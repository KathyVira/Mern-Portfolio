import React from 'react'
import { Form, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { ShowLoading, HideLoading } from '../../redux/rootSlice'
import axios from 'axios'
import { message } from 'antd'

function AdminFooter() {
  const dispatch = useDispatch()
  const { portfolioData } = useSelector((state) => state.root)
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading())
      const response = await axios.post('/api/portfolio/update-footer', {
        ...values,
        _id: portfolioData.footer._id,
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
        initialValues={portfolioData.footer}
      >
        <Form.Item name="title" label="Title">
          <input placeholder="Title" />
        </Form.Item>
        <Form.Item name="name" label="The Name">
          <input placeholder="The Name" />
        </Form.Item>

        <Form.Item name="icon" label="Icon">
          <input placeholder="Icon" />
        </Form.Item>
        <Form.Item name="link" label="Link">
          <input placeholder="Link" />
        </Form.Item>
        <Form.Item name="alt" label="Alt">
          <input placeholder="Alt" />
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

export default AdminFooter
