import { Schema, model } from "mongoose";
import Joi from "joi";

//validation schema
export const sportClubsSchemaValidate = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  author: Joi.string().required(),
  published: Joi.boolean().required(),
});
//creating an interface
interface ISportsClub {
  title: string;
  description: string;
  author: string;
  published: boolean;
}
//sportsClubSchema
const sportsClubSchema = new Schema<ISportsClub>({
  title: {
    type: String,
  },

  description: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },
  published: {
    type: Boolean,
    required: true,
    default: false,
  },
});
//creating a model
export const SportsClub = model<ISportsClub>("SportsClub", sportsClubSchema);
