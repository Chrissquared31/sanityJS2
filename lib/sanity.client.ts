import { createClient } from "next-sanity";

export const projectId = 'qztf9hs5';
export const dataset = 'production';

export const client = createClient({
    projectId: projectId,
    dataset: dataset,
    apiVersion: '2022-11-15', // I assume you meant 2022-11-15, as you wrote '022-11-15'
    useCdn: false
});
