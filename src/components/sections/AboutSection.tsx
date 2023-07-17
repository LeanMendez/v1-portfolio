import React from 'react'
import Title from '../ui-components/Title'

const AboutSection = () => {
  return (
    <section id={'about'} className={`flex flex-col gap-4 mb-10 scroll-m-48`}>
    <Title className='mb-8'>About Me</Title>
    <p>In 2012, I decided to pursue my dream of studying computer engineering. Although the career was not available in my hometown at that time, I managed to study it in the city of Córdoba with the support of my parents. However, due to the economic crisis that affected the country during those years, I had to interrupt my studies and return to my hometown.</p>
    <p>Despite this interruption, I never lost my passion for technology. In 2020, during the global pandemic, I had the opportunity to reignite my interest in programming. Since then, my focus has been on creating technological products and participating in projects that fill me with pride for not giving up on my dream.</p>
    <p>
    When I&apos;m not in front of the computer, I enjoy spending my free time playing board games with my partner and friends, as well as teaching physics and mathematics to teenage students.</p>
    </section>
  )
}

export default AboutSection