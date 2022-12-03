import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal, Form, message } from 'antd'

import { HideLoading, ReloadData, ShowLoading } from '../../redux/rootSlice'
import axios from 'axios'

function Experiences() {
  const dispatch = useDispatch()
  const { portfolioData } = useSelector((state) => state.root)
  const { experiences } = portfolioData
  const [showAddEditModal, setShowAddEditModal] = React.useState(false)
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null)
  const [type, setType] = React.useState('add')

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading())
      let response
      if (selectedItemForEdit) {
        response = await axios.post('/api/portfolio/update-experience', {
          ...values,
          _id: selectedItemForEdit._id,
        })
      } else {
        response = await axios.post('/api/portfolio/add-experience', values)
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
      const response = await axios.post('/api/portfolio/delete-experience', {
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
          className="bg-primary px-5 py-2 text-white sm:grid-cols-1"
          onClick={() => {
            setSelectedItemForEdit(null)
            setShowAddEditModal(true)
          }}
        >
          Add Experience
        </button>
      </div>

      <div className="grid grid-cols-4 gap-5 mt-5 sm:grid-cols-1">
        {experiences.map((experience) => (
          <div className="shadow border border-gray-400  p-5 flex flex-col justify-between">
            <div className="justify-evenly ">
              <h2 className="text-primary text-xl font-bold ">
                {experience.period}
              </h2>
              <hr />
              <p className="pb-2 pt-4 company">
                <b>Company:</b> {experience.company}
              </p>
              <p className="pb-2 pt-2 title">
                <b>Role:</b> {experience.title}
              </p>
              <p className="pb-2 pt-2 description">{experience.description}</p>
            </div>
            <div className="flex justify-between gap-5 ">
              <button
                className="bg-red-500 text-white px-5 py-2 "
                onClick={() => {
                  onDelete(experience)
                }}
              >
                Delete
              </button>
              <button
                className="bg-black text-white px-5 py-2 "
                onClick={() => {
                  setSelectedItemForEdit(experience)
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
          title={selectedItemForEdit ? 'Edit Experience' : 'Add Experience'}
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
            <Form.Item name="period" label="Period">
              <input placeholder="Period" />
            </Form.Item>
            <Form.Item name="company" label="Company">
              <input placeholder="Company" />
            </Form.Item>
            <Form.Item name="title" label="Title">
              <input placeholder="Title" />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <input placeholder="Description" />
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

export default Experiences
