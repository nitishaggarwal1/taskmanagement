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