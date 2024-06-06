import {
  ListBucketsCommand,
  ListObjectsCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import express from "express";

import EnvClient from "./infrastructure/env/env-client";

const app = express();

app.use(express.json());

const client = new S3Client({
  region: EnvClient.AWS_REGION,
  credentials: {
    accessKeyId: EnvClient.AWS_ACCESS_KEY,
    secretAccessKey: EnvClient.AWS_SECRET_KEY,
  },
});

app.get("/buckets", async (req, res) => {
  const response = await client.send(new ListBucketsCommand());
  return res.json(response.Buckets);
});

app.post("/list-objects", async (req, res) => {
  const { bucket, maxKeys } = req.body;

  const response = await client.send(
    new ListObjectsCommand({ Bucket: bucket, MaxKeys: maxKeys })
  );
  return res.json(response);
});

app.listen(EnvClient.PORT, () => {
  console.log("Running at " + EnvClient.PORT);
});
