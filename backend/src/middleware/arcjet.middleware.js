import aj from "../lib/arcjet.js";
import { isSpoofedBot } from "@arcjet/inspect";


export const arcjetMiddleware = async (req, res, next) => {
    try {
        const result = await aj.inspect(req);

        if(result.isDenied) {
            if(result.reason.isRateLimit()){
                return res.status(429).json({
                    message: "Too many requests. Please try again later."
                });
            } 

        else if(result.reason === "bot" && isSpoofedBot(result.botCategories)) {
            return res.status(403).json({
                message: "Access denied. Bots are not allowed."
            });

        }else{
            return res.status(403).json({
                message: "Access denied. Your request was flagged as suspicious."
            });

        }
    }
        next();
    } catch (error) {
        console.error("Error in Arcjet middleware:", error);
        next();
        
    }
}