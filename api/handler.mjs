import worker from "../src/worker.mjs";

export const config = {
  runtime: "edge",
};

export default async function handler(request) {
  return worker.fetch(request);
}
