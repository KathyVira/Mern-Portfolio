import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal, Form, message } from 'antd'

import { HideLoading, ReloadData, ShowLoading } from '../../redux/rootSlice'
import axios from 'axios'

function AdminSocialLink() {
  const dispatch = useDispatch()
  const { portfolioData } = useSelector((state) => state.root)
  const { socialLink } = portfolioData
  const [showAddEditModal, setShowAddEditModal] = React.useState(false)
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null)
  const [type, setType] = React.useState('add')

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading())
      let response
      if (selectedItemForEdit) {
        response = await axios.post('/api/portfolio/update-socialLink', {
          ...values,
          _id: selectedItemForEdit._id,
        })
      } else {
        response = await axios.post('/api/portfolio/add-socialLink', values)
      }

      dispatch(HideLoading())
      if (response.data.success) {
        message.success(response.data.message)
        setShowAddEditModal(false)
        setSelectedItemForEdit(null)
        dispatch(HideLoading())
        dispatch(ReloadData(true))
      } else {
        message.error(response.data.message)
      }
    } catch (error) {
      dispatch(HideLoading())
      message.error(error.message)
    }
  }
  const onDelete = async (item) => {
    try {
      dispatch(ShowLoading())
      const response = await axios.post('/api/portfolio/delete-socialLink', {
        _id: item._id,
      })
      dispatch(HideLoading())
      if (response.data.success) {
        message.success(response.data.message)
        dispatch(HideLoading())
        dispatch(ReloadData(true))
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
      <div className="flex justify-end">
        <button
          className="bg-primary px-5 py-2 text-white"
          onClick={() => {
            setSelectedItemForEdit(null)
            setShowAddEditModal(true)
          }}
        >
          Add Social Link
        </button>
      </div>

      <div className="grid grid-cols-4 gap-5 mt-5 sm:grid-cols-1">
        {socialLink.map((socialLink) => (
          <div className="shadow border border-gray-400  p-5 flex flex-col justify-between">
            <div className="justify-evenly ">
              <h2 className="text-primary text-xl font-bold title">
                {socialLink.title}
              </h2>
              <hr />
              <p className="pb-2 pt-4 link">
                <b>Link:</b> {socialLink.link}
              </p>
              <p className="pb-2 pt-2 icon">
                <b>Icon:</b> {socialLink.icon}
              </p>
              <p>
                <i className={socialLink.icon}></i>
              </p>
              <p className="pb-2 pt-2 alt">
                <b>Alt:</b>
                {socialLink.alt}
              </p>
            </div>
            <div className="flex justify-between gap-5 ">
              <button
                className="bg-red-500 text-white px-5 py-2 "
                onClick={() => {
                  onDelete(socialLink)
                }}
              >
                Delete
              </button>
              <button
                className="bg-black text-white px-5 py-2 "
                onClick={() => {
                  setSelectedItemForEdit(socialLink)
                  setShowAddEditModal(true)
                  setType('edit')
                }}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {(type === 'add' || selectedItemForEdit) && (
        <Modal
          visible={showAddEditModal}
          title={selectedItemForEdit ? 'Edit social Link' : 'Add social Link'}
          footer={null}
          onCancel={() => {
            setShowAddEditModal(false)
            setSelectedItemForEdit(null)
          }}
        >
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={selectedItemForEdit || {}}
          >
            <Form.Item name="title" label="Title">
              <input placeholder="Title" />
            </Form.Item>
            <Form.Item name="link" label="Link">
              <input placeholder="Link" />
            </Form.Item>
            <Form.Item name="icon" label="Icon">
              <input placeholder="Icon" />
            </Form.Item>
            <Form.Item name="alt" label="Alt">
              <input placeholder="Alt" />
            </Form.Item>

            <div className="flex justify-between">
              <button className="bg-primary text-white px-5 py-2 ">
                {selectedItemForEdit ? 'Update' : 'Add'}
              </button>

              <button
                className="border-primary border-solid border-2 text-primary px-5 py-2 "
                onClick={() => {
                  setShowAddEditModal(false)
                  setSelectedItemForEdit(null)
                  dispatch(ReloadData(true))
                }}
              >
                Cancel
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  )
}

export default AdminSocialLink
