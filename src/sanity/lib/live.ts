import { client } from "./client";
import { defineLive } from "next-sanity";
import { token } from "./token";

export const { sanityFetch, SanityLive } = defineLive({
    client: client,
    serverToken: token,
    browserToken: token,
});
