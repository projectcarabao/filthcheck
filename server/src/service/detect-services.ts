
import { Request, Response } from "express"
import nsfwDetector from "@/utils/nsfw-detector";

export const detectImageService = async (request: Request, response: Response) => {
    try {

        const { imageURL } = request.params

        const response = await nsfwDetector(imageURL);

        return { status: 200, data: response };

    } catch (error) {

        if (error instanceof Error) throw new Error(error.message);
    }
}