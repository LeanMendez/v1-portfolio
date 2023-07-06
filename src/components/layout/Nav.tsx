import { useEffect, useState } from "react";
import {Link as ScrollLink} from 'react-scroll'
import {} from 'classnames';

const Nav = () => {
  const [activeSection, setActiveSection] = useState('');
  useEffect(() => {

    const handleScroll = () => {
      const sectionPositions = {
        // Aquí defines las posiciones de las secciones
        about: document.getElementById('about')?.offsetTop,
        skills: document.getElementById('skills')?.offsetTop,
        projects: document.getElementById('projects')?.offsetTop,
        blog: document.getElementById('blog')?.offsetTop,
      };

      const scrollPosition = window.scrollY + window.innerHeight * 0.5;
      
      // Comprueba qué sección está actualmente en el viewport
      let active = '';
      if (sectionPositions.skills && scrollPosition < sectionPositions.skills ) {
        active = 'about';
      } else if (sectionPositions.projects && scrollPosition < sectionPositions.projects) {
        active = 'skills';
      } else if (sectionPositions.blog && scrollPosition < sectionPositions.blog) {
        active = 'projects';
      } else {
        active = 'blog'
      }

      setActiveSection(active);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);
 
  function getLinkStyles(section:string){
    return {
      "color": activeSection === section ? 'rgb(254, 240, 138)' : 'rgb(148 163 184)',
    };}

    function getLineStyles(section:string){
      return {
        "backgroundColor": activeSection === section ? 'rgb(254, 240, 138)' : 'rgb(148 163 184)',
        "width": activeSection === section ? '4rem' : '2rem',
        "height": activeSection === section ? '3px' : '1px',
      };
  }


  return (
    <nav className={`nav hidden lg:block min-w-[400px] lg:mb-60`}>
      <ul className={`flex flex-col mt-16 w-max`}>
        <li>
          <ScrollLink offset={-100} activeClass="active"  smooth={true} duration={500} spy={true} to="about"  className={`group flex  cursor-pointer items-center py-3 hover:drop-shadow-neon`}>
            <span
              className={`nav-indicator mr-4 h-px w-8 bg-slate-400 transition-all group-hover:w-16 group-hover:bg-yellow-200 group-focus-visible:w-16 group-hover:h-[3px] group-focus-visible:bg-yellow-200 motion-reduce:transition-none`}
              style={getLineStyles('about')}
            ></span>
            <span
              className={`nav-text text-lg font-bold uppercase tracking-widest text-slate-500 group-hover:text-yellow-200 group-focus-visible:text-yellow-200`}
              style={getLinkStyles('about')}
            >
              About
            </span>
          </ScrollLink>
        </li>
        <li>
        <ScrollLink offset={-100} activeClass="active" smooth={true} duration={500} spy={true} to="skills" className={`group flex cursor-pointer items-center py-3 hover:drop-shadow-neon`}>
            <span
              className={`nav-indicator mr-4 h-px w-8 bg-slate-400 transition-all group-hover:w-16 group-hover:bg-yellow-200 group-focus-visible:w-16 group-hover:h-[3px] group-focus-visible:bg-yellow-200 motion-reduce:transition-none`}
              style={getLineStyles('skills')}
            ></span>
            <span
              className={`nav-text text-lg font-bold uppercase tracking-widest text-slate-500  group-hover:text-yellow-200 group-focus-visible:text-yellow-200`}
              style={getLinkStyles('skills')}
            >
              Skills
            </span>
          </ScrollLink>
        </li>
        <li>
        <ScrollLink offset={-100} activeClass="active" smooth={true} duration={500} spy={true} to="projects" className={`group flex cursor-pointer items-center py-3 hover:drop-shadow-neon`}>
            <span
              className={`nav-indicator mr-4 h-px w-8 bg-slate-400 transition-all group-hover:w-16 group-hover:bg-yellow-200 group-focus-visible:w-16 group-hover:h-[3px] group-focus-visible:bg-yellow-200 motion-reduce:transition-none`}
              style={getLineStyles('projects')}
            ></span>
            <span
              className={`nav-text text-lg font-bold uppercase tracking-widest text-slate-500 group-hover:text-yellow-200 group-focus-visible:text-yellow-200`}
              style={getLinkStyles('projects')}
            >
              Projects
            </span>
          </ScrollLink>
        </li>
        <li>
        <ScrollLink offset={-100} activeClass="active" smooth={true} duration={500} spy={true} to="blog" className={`group flex  cursor-pointer items-center py-3 hover:drop-shadow-neon`}>
            <span
              className={`nav-indicator mr-4 h-px w-8 bg-slate-400 transition-all group-hover:w-16 group-hover:bg-yellow-200 group-focus-visible:w-16 group-hover:h-[3px] group-focus-visible:bg-yellow-200 motion-reduce:transition-none`}
              style={getLineStyles('blog')}
            ></span>
            <span
              className={`nav-text text-lg font-bold uppercase tracking-widest text-slate-500 group-hover:text-yellow-200 group-focus-visible:text-yellow-200`}
              style={getLinkStyles('blog')}
            >
              Blog
            </span>
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
