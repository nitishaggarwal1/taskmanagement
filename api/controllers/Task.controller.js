import httpStatus from "http-status";
import { TaskService } from "../services/index.js";

export const AddTask = async (req, res) => {
    const res_obj = await TaskService.AddTask(req?.body);
   res.status(res_obj.code).send(res_obj);
}

export const GetAllTask = async (req, res) => {
    const res_obj = await TaskService.GetAllTask();
   res.status(res_obj.code).send(res_obj);
}