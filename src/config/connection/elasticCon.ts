import { Client } from '@elastic/elasticsearch'
import * as dotenv from 'dotenv';
dotenv.config();

export const elasticClient = new Client({
    node: process.env.ELAST_URL,
    auth: {
        apiKey: process.env.ELAST_API
    }
})