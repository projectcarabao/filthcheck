import { Request, Response, NextFunction } from 'express';
import rateLimit from 'express-rate-limit';

const rateLimiter = async (request: Request, response: Response, next: NextFunction): Promise<void> => {

    const limiter = rateLimit({
        windowMs: 60 * 1000, // 1 minute
        // max: user?.plan === 'premium' ? 1000 : 100, // Different limits for free vs premium users
        max: 100, // Different limits for free vs premium users
        message: 'Rate limit exceeded'
    });

    return limiter(request, response, next);
};

export default rateLimiter
