import fs from 'fs'
import path from 'path';
import { GetStaticPaths, GetStaticProps } from 'next';
import Markdown from "markdown-to-jsx";
import matter from "gray-matter"
import { IPostMetadata } from '@/types';




export const getStaticPaths: GetStaticPaths = async () => {
  const folder = path.join(process.cwd(), 'content');
  const filenames = fs.readdirSync(folder);
  const markdownPosts = filenames.filter((file)=> file.endsWith(".md"))
  const paths = markdownPosts.map((filename) => {
    const slug = filename.replace('.md', '');
    return {
      params: { slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async({params}:any) => {
  const slug = params.slug

  const folder = 'content';
  const file = `${folder}/${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterized = matter(content)
  const matterResult = {
    title: matterized.data.title,
    subtitle: matterized.data.subtitle,
    date: matterized.data.date,
    slug: slug,
    content: matterized.content
  }

  return {
    props: {
      matterResult,

    },
  };
}

const PostPage = (props:IPostMetadata) => {
const {title, date, content,slug,subtitle} = props.matterResult
  return (
    <div>
      <span className={`text-sm text-slate-500`}>{date}</span>
      <h1 className="text-5xl">{title}</h1>
      <h2 className={`text-2xl text-slate-400`}>{subtitle}</h2>

    <p className={`text-sm text-yellow-300`}><Markdown>{content}</Markdown></p>
    </div>
  )
}

export default PostPage
