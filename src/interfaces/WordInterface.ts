import { ObjectId } from "mongoose"

export default interface IWord {
    _id?: ObjectId,
    lenght: number,
    word: string
}