import { Request, Response } from "express";

import { WordModel } from "../model/WordModel";

import IWord from "../interfaces/WordInterface";



function randomInRange(range: number): number {
    return Math.floor(Math.random() * (range - 0) + 0)
}

async function randomWordBySizeAsync(length: number): Promise<IWord | undefined> {

    const words = await WordModel.find({ length })

    const index = randomInRange(words.length)

    return words[index]
}

async function randomWordAsync(): Promise<IWord | null> {

    const size = WordModel.length

    const index = randomInRange(size)

    const word = await WordModel.findOne().skip(index).exec()

    return word
}



export async function getAllAsync(req: Request, res: Response) {

    const data = await WordModel.find({})

    res.json(data)

}
export async function getRandomAsync(req: Request, res: Response) {

    const data = await randomWordAsync()

    res.json(data)

}
export async function getRandomInRangeAsync(req: Request, res: Response) {

    const { size } = req.params

    const data = await randomWordBySizeAsync(parseInt(size))

    res.json(data)
}


