import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '371c01c4f19a9e17eb0ef46917b696d99deb87ae', queries });
export default client;
  