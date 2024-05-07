import React from 'react'
import { FcCheckmark, FcCancel } from "react-icons/fc";
import toast from 'react-hot-toast';
import { useDeleteTaskMutation, useUpdateTaskMutation } from '../provider/redux/queries/Task';

const Task = ({index, data, refetchTask}) => {
  const [updateTask, updateTaskResponse] = useUpdateTaskMutation();
  const [deleteTask, deleteTaskResponse] = useDeleteTaskMutation();

  const updateTaskHandler = async (id) => {
    try {
        const [error]= await updateTask(id);
        if(error) {
          toast.error(error?.data?.msg)
        }
        await refetchTask();
        toast.success("Task Updated");
      } catch (error) {
        toast.error(error?.response?.data?.msg)
      }
  }

  const deleteTaskHandler = async (id) => {
    try {
        const [error]= await deleteTask(id);
        if(error) {
          toast.error(error?.data?.msg)
        }
        refetchTask();
        toast.success("Task Deleted");
      } catch (error) {
        toast.error(error?.response?.data?.msg)
      }
   }

  return (
    <>
        <tr>
      <th scope="row">{index + 1}</th>
      <td>{data?.title}</td>
      <td>{data?.description}</td>
      <td>
        {data?.status?<FcCheckmark />: <FcCancel/>}
      </td>
      <td className='d-flex gap-2'>
        {!data?.status && <button disabled={updateTaskResponse.isLoading} onClick={() => updateTaskHandler(data?._id)}className='btn btn-sm btn-warning'>Update</button>
}        <button disabled={deleteTaskResponse.isLoading} onClick={() => deleteTaskHandler(data?._id)}className='btn btn-sm btn-danger'>Delete</button>
      </td>
    </tr>
    </>
  )
}

export default Task