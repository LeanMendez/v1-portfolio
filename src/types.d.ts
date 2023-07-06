//HOME PAGE
export interface IHome {
  arrSlugs: string[];
}

//PROJECTS SECTION
export interface IProjectSection {
  slug: string;
}

//POST METADATA
export interface IPostMetadata {
  projects: IMeta[];
}

interface IMeta {
  title: string;
  date: string;
  github: string;
  external: string;
  tech: string[];
  company: string
  showInProjects: boolean;
  slug: string;
  source: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
}

interface IFrontmatter{
  title: string;
  date: string;
  subtitle: string;
  slug: string;
}


interface IgetFilesBySlug {
  slug: string;
  type: string;
}

interface Icomponente {
  data: IMeta
}