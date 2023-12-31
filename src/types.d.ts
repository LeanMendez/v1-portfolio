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
  projects: IProjects[];
  articles: IArticles[];
  skills: ISkillCard[]
}

interface IArticles{
  title: string;
  date: string;
  showInProjects: boolean;
  external: string;
}


// PROJECTS
interface IProjects {
  title: string;
  date: string;
  github: string;
  image: string;
  external: string;
  tech: string[];
  company: string
  showInProjects: boolean;
  slug: string;
  source: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
}

// SKILLS
export interface ISkillCard {
  title: string;
  skills: string[] 
}


//Footer
export interface IFooter{
  StyleClass?: string;
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

