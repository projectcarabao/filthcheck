import { pipeline, env } from "@huggingface/transformers";

env.localModelPath = process.cwd() + "/models";
env.allowLocalModels = true;
env.allowRemoteModels = false;

const nsfwDetector = async (image: string) => {

    try {
        const model = 'NsfwDetector/vit-base-nsfw-detector';

        const classifier = await pipeline('image-classification', model, {
            dtype: 'fp16'
        });

        const response = await classifier(image) as IResponse[];

        return response
    } catch (error) {
        if (error instanceof Error) throw new Error(`Failed to process image: ${error.message}`);
    }

}

export default nsfwDetector