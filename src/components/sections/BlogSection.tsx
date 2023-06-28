import React from 'react'
import Title from '../ui-components/Title'
import BlogCard from '../ui-components/BlogCard'
import { IBlogSection } from '@/types'
import Link from '../ui-components/Link'


const BlogSection = ({slugs}:IBlogSection) => {

  return (
    <section className={`flex flex-col gap-5`}>
      <Title>Blog Section</Title>
    {slugs.map(slug => <Link key={slug} href={`http://localhost:3000/blog/${slug}`}><span >{slug}</span></Link>)}
    </section>
  )
}

export default BlogSection