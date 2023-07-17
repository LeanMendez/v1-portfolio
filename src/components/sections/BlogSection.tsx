import React from 'react'
import Title from '../ui-components/Title'
import BlogCard from '../ui-components/BlogCard'


const BlogSection = (articles:any) => {
 const {props} = articles
  return (
    <section id={'blog'} className={`flex flex-col gap-5 min-h-[500px] lg:min-h-[calc(100vh-96px)] scroll-m-24` }>
      <Title className='mb-8'>Blog Articles</Title>
      {props.map((card:any) => <BlogCard key={card.slug} {...card} />)}
    </section>
  )
}

export default BlogSection