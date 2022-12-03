import React from 'react'
import { Form, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { ShowLoading, HideLoading } from '../../redux/rootSlice'
import axios from 'axios'
import { message } from 'antd'

function AdminAbout() {
  const dispatch = useDispatch()
  const { portfolioData } = useSelector((state) => state.root)
  const onFinish = async (values) => {
    try {
      const tempSkils = values.skils.split(' , ')
      values.skils = tempSkils
      const tempSkilsFront = values.skilsFront.split(' , ')
      values.skilsFront = tempSkilsFront
      const tempSkilsBack = values.skilsBack.split(' , ')
      values.skilsBack = tempSkilsBack
      dispatch(ShowLoading())
      const response = await axios.post('/api/portfolio/update-about', {
        ...values,
        _id: portfolioData.about._id,
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
        initialValues={{
          ...portfolioData.about,
          skils: portfolioData.about.skils.join(' , '),
          skilsFront: portfolioData.about.skilsFront.join(' , '),
          skilsBack: portfolioData.about.skilsBack.join(' , '),
        }}
      >
        <Form.Item name="lottieURL" label="Lottie URL">
          <input placeholder="Lottie URL" />
        </Form.Item>
        <Form.Item name="description1" label="Description one">
          <textarea placeholder="Description on" />
        </Form.Item>
        <Form.Item name="description2" label="Description tow">
          <textarea placeholder="Description tow" />
        </Form.Item>
        <Form.Item name="skils" label="Skils">
          <input placeholder="Skils" />
        </Form.Item>
        <Form.Item name="skilsFront" label="Skils Front">
          <input placeholder="Skils Front" />
        </Form.Item>
        <Form.Item name="skilsBack" label="Skils Back">
          <input placeholder="Skils Back" />
        </Form.Item>
        <Form.Item name="alt" label="alt">
          <input placeholder="alt" />
        </Form.Item>
        <Form.Item name="ariaLable" label="ariaLable">
          <input placeholder="ariaLable" />
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

export default AdminAbout
