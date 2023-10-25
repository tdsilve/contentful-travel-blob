import { createClient } from "contentful";

const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_PREVIEW_ACCESS_TOKEN,
} = process.env;

const client = createClient({
  space: CONTENTFUL_SPACE_ID!,
  accessToken: CONTENTFUL_ACCESS_TOKEN!,
});

// TODO: define a host
const previewClient = createClient({
  space: CONTENTFUL_SPACE_ID!,
  accessToken: CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
  host: "preview.contentful.com",
});

export const contentfulClient = (preview = false) => {
  if (preview) {
    return previewClient;
  }
  return client;
};
