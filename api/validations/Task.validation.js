import  {body, param} from 'express-validator';

export const AddTask = [
    body("title").isString().withMessage("Title must be a String").notEmpty().withMessage("Title is required"),
    body("description").isString().withMessage("Description must be a String").notEmpty().withMessage("Description is required"),


]