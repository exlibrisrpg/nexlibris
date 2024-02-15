import Client, { Environment, Local, PreviewEnv } from "./client.gen";

const env = process.env.NODE_ENV;
const prID = process.env.NEXT_PUBLIC_VERCEL_GIT_PULL_REQUEST_ID;
const baseURL =
  env === "development" ? Local : prID ? PreviewEnv(prID) : Environment("prod");
export const client = new Client(baseURL, {
  auth: process.env.FRONTEND_AUTH_TOKEN,
});
