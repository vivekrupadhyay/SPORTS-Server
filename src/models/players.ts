import { Schema, model } from "mongoose";
import Joi, { string } from "joi";

export const playersSchemaValivation=Joi.object({
    firstName:Joi.string().required(),
    lastName:Joi.string().required(),
    dateOfBirth:Joi.date().required(),
    rank:Joi.string().required()
})

interface IPlayers{
    firstName:string,
    lastName:string,
    dateOfBirth:Date,
    rank:string
}

const playersSchema=new Schema<IPlayers>({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:Date,
        required:true
    },
    rank:{
        type:String,
        required:true
    }
})
export const Players=model<IPlayers>("Players",playersSchema)