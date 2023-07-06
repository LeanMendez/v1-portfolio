import React from 'react'
import Title from '../ui-components/Title'
import BlogCard from '../ui-components/BlogCard'


const BlogSection = () => {

  return (
    <section id={'blog'} className={`flex flex-col gap-5 min-h-[1200px] scroll-m-24` }>
      <Title>Blog Articles</Title>
    <BlogCard />
    </section>
  )
}

export default BlogSection