import { Client } from '@elastic/elasticsearch'
import * as dotenv from 'dotenv';
dotenv.config();

/**
 * Creates an instance of the Elasticsearch client.
 * 
 * This client is configured to connect to an Elasticsearch cluster
 * using the connection details and API key provided in the environment variables.
 */
export const elasticClient = new Client({
    node: process.env.ELAST_URL, // The URL of the Elasticsearch node to connect to.
    auth: {
        apiKey: process.env.ELAST_API // The API key used for authenticating with the Elasticsearch cluster.
    }
})