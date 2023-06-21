import { ObjectId } from "mongoose"

export default interface IWord {
    _id?: ObjectId,
    length: number,
    word: string
}