//HOME PAGE
export interface IHome {
  slugs: string[];
}

//BLOG SECTION
export interface IBlogSection {
  slugs: string[];
}

//POST METADATA
export interface IPostMetadata {
  matterResult: IMeta;
}

interface IMeta {
  title: string;
  date: string;
  subtitle: string;
  slug: string;
  content: string;
}
