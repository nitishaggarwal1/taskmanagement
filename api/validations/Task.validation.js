import  {body, param} from 'express-validator';

export const AddTask = [
    body("title").isString().withMessage("Title must be a String").notEmpty().withMessage("Title is required"),
    body("description").isString().withMessage("Description must be a String").notEmpty().withMessage("Description is required"),


]

export const UpdateTask = [
    param("id").isString().withMessage("Id must be a String").isMongoId().withMessage("Id must be a mongo id")

]

export const DeleteTask = [
    param("id").isString().withMessage("Id must be a String").isMongoId().withMessage("Id must be a mongo id")

]
