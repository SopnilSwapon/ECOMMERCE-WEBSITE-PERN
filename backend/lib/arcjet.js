import arcjet , {shield, detectBot, tokenBucket} from '@arcjet/node';

import "dotenv/config";

export const aj = arcjet({
    key: process.env.ARCJET_KEY,
    characteristics:["ip.src"],
    rules: [
        // shield protects your app from common SQL injection, XSS(Cross site scripting), CSRF(Cross site request forgery)
        shield({mode: "LIVE"}),
        detectBot({
            mode: "LIVE",
            // block all bots except search engine
            allow: ["CATEGORY:SEARCH_ENGINE"]
        }),
        // rate limiting

        tokenBucket({
            mode: "LIVE",
            refillRate: 5,
            interval: 10,
            capacity: 10,
        })

    ]
})