import { detectImageService } from "@/services/detect-services";
import { Request, Response } from "express"


export const detectImageController = async (request: Request, response: Response) => {
    try {

        const result = await detectImageService(request, response);

        if (!result) throw new Error(`Error processing image.`);

        response.status(result.status).json(result);

    } catch (error) {

        if (error instanceof Error) response.status(400).json({ message: error.message });
    }
}
