import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal, Form, message } from 'antd'

import { HideLoading, ReloadData, ShowLoading } from '../../redux/rootSlice'
import axios from 'axios'

function AdminCourses() {
  const dispatch = useDispatch()
  const { portfolioData } = useSelector((state) => state.root)
  const { course } = portfolioData
  const [showAddEditModal, setShowAddEditModal] = React.useState(false)
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null)
  const [type, setType] = React.useState('add')
  const [form] = Form.useForm()

  const onFinish = async (values) => {
    try {
      const tempTechnologies = values?.technologies?.split(' , ') || []
      values.technologies = tempTechnologies
      dispatch(ShowLoading())
      let response
      if (selectedItemForEdit) {
        response = await axios.post('/api/portfolio/update-course', {
          ...values,
          _id: selectedItemForEdit._id,
        })
      } else {
        response = await axios.post('/api/portfolio/add-course', values)
      }

      dispatch(HideLoading())
      if (response.data.success) {
        message.success(response.data.message)
        setShowAddEditModal(false)
        setSelectedItemForEdit(null)
        dispatch(HideLoading())
        dispatch(ReloadData(true))
        form.resetFields()
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
      const response = await axios.post('/api/portfolio/delete-course', {
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
          Add Course
        </button>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-5 sm:grid-cols-1">
        {course.map((course) => (
          <div className="shadow border border-gray-400 gap-5 p-5 flex flex-col justify-between">
            <div className="justify-evenly ">
              <h2 className="text-primary text-xl font-bold ">
                {course.title}
              </h2>
              <hr />
              <p className="pb-2 pt-4 image">
                <img src={course.image} alt="" className="h-60 " />
              </p>
              <p className="pb-2 pt-2 title"></p>

              <p className="pb-2 pt-2 description">{course.description}</p>
            </div>
            <div className="flex justify-between gap-5 ">
              <button
                className="bg-red-500 text-white px-5 py-2 "
                onClick={() => {
                  onDelete(course)
                }}
              >
                Delete
              </button>
              <button
                className="bg-black text-white px-5 py-2 "
                onClick={() => {
                  setSelectedItemForEdit(course)
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
          title={selectedItemForEdit ? 'Edit Course' : 'Add Course'}
          footer={null}
          onCancel={() => {
            setShowAddEditModal(false)
            setSelectedItemForEdit(null)
          }}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={
              {
                ...selectedItemForEdit,
                technologies: selectedItemForEdit?.technologies?.join(' , '),
              } || {}
            }
          >
            <Form.Item name="title" label="Title">
              <input placeholder="Title" />
            </Form.Item>
            <Form.Item name="image" label="Image url">
              <input placeholder="Image url" />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <textarea placeholder="Description" />
            </Form.Item>
            <Form.Item name="link" label="Link">
              <input placeholder="Link" />
            </Form.Item>
            <Form.Item name="technologies" label="Technologies">
              <input placeholder="Technologies" />
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

export default AdminCourses
