type DateString = string;

export interface Meta {
  title: string;
  description: string;
  createdAt: DateString;
  /* only for article */
  publishedAt?: DateString;
  /* only for article */
  category?: string;
  /* only for article */
  author?: {
    name: string;
    twitter: string;
    image: string;
  };

  coverType: "image" | "video" | "youtube_video" | "none";

  image?: string;
  slug?: string;
  videoSlug?: string;
}

export interface WorkContract extends Meta {
  size: "cover" | "portrait";
  stack: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ArticleContract extends Meta {
  tags: string[];
  topic: string;
  type: "article" | "note";
}
