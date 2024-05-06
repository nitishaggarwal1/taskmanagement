import httpStatus from "http-status"
import {TaskModel} from './../models/index.js';

export const AddTask = async (body) => {
    try {
        const {title, description} = body
         await TaskModel.Task.create({
            title, description
        })
        return {
            code: httpStatus.CREATED,
            success: true,
            msg: "Task created"
        }
    } catch (error) {
        return {
            code: httpStatus.INTERNAL_SERVER_ERROR,
            success: false,
            msg: error
        }
    }
}

export const GetAllTask = async () => {
    try {
         const tasks = await TaskModel.Task.find({ })
        return {
            code: httpStatus.OK,
            success: true,
            msg: "Task fetched",
            AllTask: tasks,
            total: tasks.length
        }
    } catch (error) {
        return {
            code: httpStatus.INTERNAL_SERVER_ERROR,
            success: false,
            msg: error,
            AllTask: [],
            total: 0
        }
    }
}