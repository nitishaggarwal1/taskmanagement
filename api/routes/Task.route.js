import express from 'express';
const router = express.Router();
import {TaskController} from './../controllers/index.js';
import {TaskValidation} from './../validations/index.js';
import {validation} from './../middlewares/validate.js';

router.route("/")

.get(TaskController.GetAllTask)

.post(TaskValidation.AddTask, validation, TaskController.AddTask);

router.route("/")

.put((req, res) => {})  

.delete((req, res) => {})
export default router;
