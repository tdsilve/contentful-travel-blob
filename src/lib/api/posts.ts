import { contentfulClient } from "./contentfulClient";

const CONTENT_TYPE = "travelBlog";

const parsedPosts = (posts) => {
  return posts.map((post) => {
    return {
      id: post.sys.id,
      title: post.fields.title,
      cover: {
        title: post.fields.cover.fields.title,
        url: post.fields.cover.fields.file.url,
      },
      tags: post.fields.tags,
      content: post.fields.content,
      publishDate: post.fields.publishDate,
      slug: post.fields.slug,
      author: {
        name: post.fields.author.fields.name,
        picture: post.fields.author.fields.picture.fields.file.url,
      },
    };
  });
};
export async function getPosts(preview = false) {
  const contentful = contentfulClient(preview);

  const { items } = await contentful.getEntries({
    content_type: CONTENT_TYPE,
  });
  return parsedPosts(items);
}

export async function getPostBySlug(slug: string, preview = false) {
  const contentful = contentfulClient(preview);
  const { items } = await contentful.getEntries({
    content_type: CONTENT_TYPE,
    "fields.slug": slug,
  });
  const post = parsedPosts(items)[0];
  return post;
}
