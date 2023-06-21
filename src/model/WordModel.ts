import { Schema, model } from "mongoose";
import IWord from "../interfaces/WordInterface";


export const WordSchema = new Schema<IWord>({
    word: { type: String, required: true },
    lenght: { type: Number, required: true }
})

export const WordModel = model('words', WordSchema)