import authorAvatar from "../../public/images/author/flabbet.png";
export const siteConfig = {
  name: "flabbet's thought garden",
  description:
    "flabbet's thought garden is a personal blog where I share my thoughts and experiences on programming, philosophy and meaning of life.",
  author: "flabbet",
  authorImage: authorAvatar,
  social: {
    github: "https://github.com/flabbet",
    twitter: "https://twitter.com/flabbet",
  },
};

export type SiteConfig = typeof siteConfig;
