import { Request, Response } from 'express';
import * as z from 'zod'
import nsfwDetector from '@/utils/nsfw-detector';
import { detectImageSchema } from '@/schema/detect-schema';


export const detectImageService = async (request: Request, response: Response) => {

    try {

        const parsedData = detectImageSchema.parse(request.body);

        const data = await nsfwDetector(parsedData?.imageURL);

        return { status: 200, data };

    } catch (error) {

        if (error instanceof z.ZodError) throw new Error(error.errors[0]?.message);

        if (error instanceof Error) throw new Error(error.message);
    }
}

