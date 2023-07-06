import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const root = process.cwd();

export const getFiles = (type:string) => fs.readdirSync(path.join(root, `content`, type));



export const getFilesBySlug = async (type:string, slug:string) => {
  const mdxSource = fs.readFileSync(
    path.join(root, "content",type,`${slug}.mdx`),
    "utf8"
  );

  const { data, content } = await matter(mdxSource);

  const source = await serialize(content, {});



  return {
    content: source,
    frontmatter: {
      ...data,
      slug,
    },
  };
};

export const getAllFilesFrontMatter = async (type:string) => {
  const files = getFiles(type)
  const results = Promise.all(
    await files.map( async (file) => {
      const mdxSource = fs.readFileSync(path.join(root, "content", type, file),"utf8");
  
   
  
      const { data, content } = await matter(mdxSource);
  
  
  
      const source = await serialize(content, {});
  
      return{
          ...data,
          slug: file.replace(/\.mdx/, ""),
          source,
        }
        
    })

  )
  return results
};
