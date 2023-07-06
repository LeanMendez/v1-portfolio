import React from 'react'
import Title from '../ui-components/Title'

const AboutSection = () => {
  return (
    <section id={'about'} className={`flex flex-col gap-4 mb-10 scroll-m-48`}>
    <Title className='mb-8'>About Me</Title>
    <p>In 2012, I decided to pursue my dream of studying computer engineering. Unfortunately, the career wasn&apos;t available in the city where I lived at the time. Thanks to the support of my parents and a stroke of luck, I ended up studying this wonderful career in the city of Córdoba, a little far from home. However, the universe did not conspire in my favor. Due to the strong economic crisis that affected the country in those years, my possibilities were affected and I had to leave the career and return to my hometown.</p>
    <p>I had to postpone that dream a little longer. But internally, I never lost hope of returning to the world of technology.</p>
    <p>
    In 2020, when the pandemic hit globally, I had the opportunity to reconnect with programming. Nowadays, my focus is on creating technological products and participating in projects that make me proud of not having given up on my dream.
    </p>
    <p>
    When I&apos;m away from the computer, I&apos;m probably playing board games with my girlfriend and some friends, or teaching physics and mathematics to some group of teenagers.
    </p>
    </section>
  )
}

export default AboutSection