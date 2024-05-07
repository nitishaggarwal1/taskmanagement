import React from 'react'
import {Formik, Form, ErrorMessage, Field} from 'formik';
import  * as yup from 'yup';
import toast from 'react-hot-toast';
import { useAddTaskMutation } from '../provider/redux/queries/Task';

const AddTask = () => {
  const [AddTaskFn, AddTaskResponse] = useAddTaskMutation();

  const validationSchema = yup.object({
    title:yup.string().required("Title is required"),
    description:yup.string().required("Description is required")
  })

  const initialValue = {
    title: '',
    description: ''
  }

  const onSubmitHandler = async (e, {resetForm}) => {
    try {
      const {data, error} = await AddTaskFn(e);
      console.log({data, error});
      if(error) {
        toast.error(error?.data?.msg)
        return
      }
      toast.success("Task created");
      resetForm();
    } catch (error) {
      toast.error(error?.response?.data?.msg)
    }
  }

  return (
    <Formik initialValues={initialValue} onSubmit={onSubmitHandler} validationSchema={validationSchema}>
    <Form className="container col-sm-8 mx-auto">
      <div className="mb-3">
        <label htmlFor='title'>Task Title</label>
        <Field id="title" type='text' className="form-control" placeholder='Enter Task Title' name="title"></Field>
        <ErrorMessage name="title" component={'p'} className='text-danger'/>
      </div>
      <div className="mb-3">
        <label htmlFor='description'>Task Description</label>
        <Field as="textarea" rows={6} id="description" type='text' className="form-control" placeholder='Enter Description' name="description"></Field>
        <ErrorMessage name="description" component={'p'} className='text-danger'/>
      </div>
      <div className="mb-3">
        <button type='submit' disabled={AddTaskResponse.isLoading} className="btn btn-primary">
          {AddTaskResponse.isLoading? 'Submit...': 'Submit'}
        </button>  
      </div>
    </Form>
    </Formik>
  )
}

export default AddTask