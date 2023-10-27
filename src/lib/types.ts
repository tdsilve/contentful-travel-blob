export type CoverType = {
  title: string;
  url: string;
};

export type AuthorType = {
  name: string;
  picture: string;
};

export type PostType = {
  id: string;
  title: string;
  cover: CoverType;
  tags: string[];
  content: any;
  publishDate: string;
  slug: string;
  author: AuthorType;
};
