import { Pinecone } from "@pinecone-database/pinecone";

export const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
  environment: "gcp-starter",
});
const index = pinecone.Index("pdfchat");


// import {QdrantClient} from '@qdrant/js-client-rest';

// const client = new QdrantClient({
//     url: 'https://2362694a-261c-49a1-9864-b26a857e5c14.us-east4-0.gcp.cloud.qdrant.io:6333',
//     apiKey: 'iQd5wxNaQ-jp_uxrGgHPKdYqHabWz8QcDpHn28iQqOOoNCskflgzHQ',
// });