import express, { Express } from 'express'
import cors, { CorsOptions } from 'cors'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import morgan from 'morgan'
import dotenv from 'dotenv'
import detectRoutes from '@/routes/detect-routes'
import nsfwDetector from '@/utils/nsfw-detector'

dotenv.config()

const { NODE_PORT, NODE_PUBLIC_DEV_BASE_URL } = process.env

const corsOptions: CorsOptions = {
    origin: [NODE_PUBLIC_DEV_BASE_URL as string],
    methods: ["POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests from this IP, please try again later.",
    standardHeaders: true,
    legacyHeaders: false,
});

const app: Express = express()

app.use(helmet());
app.use(cors(corsOptions));
app.use(morgan('common'));
app.use(express.json());
app.use(cookieParser());
// app.use(limiter);

app.use('/api/detect', detectRoutes)

app.get("/", async (req, res) => {
    try {
        const wait = 'https://dthezntil550i.cloudfront.net/v3/latest/v32301150603333930008587190/1280_960/c979ecc1-f5d7-4093-8faf-6f879b7d08e6.png'
        const response = await nsfwDetector(wait)
        res.status(200).json({ data: response })
    } catch (error) {
        if (error instanceof Error) {
            console.error(error);
            res.status(400).json({ error: "Image processing failed" });
        }
    }
})

const port = NODE_PORT || 5000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})