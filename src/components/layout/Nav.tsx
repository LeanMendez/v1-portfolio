const Nav = () => {
  return (
    <nav className={`nav hidden lg:block min-w-[400px] lg:mb-64`}>
      <ul className={`flex flex-col mt-16 w-max`}>
        <li>
          <a href="#about" className={`group flex items-center py-3`}>
            <span
              className={`nav-indicator mr-4 h-px w-8 bg-slate-400 transition-all group-hover:w-16 group-hover:bg-yellow-200 group-focus-visible:w-16 group-hover:h-[3px] group-focus-visible:bg-yellow-200 motion-reduce:transition-none`}
            ></span>
            <span
              className={`nav-text text-lg font-bold uppercase tracking-widest text-slate-500 group-hover:text-yellow-200 group-focus-visible:text-yellow-200`}
            >
              About
            </span>
          </a>
        </li>
        <li>
          <a href="#skills" className={`group flex items-center py-3`}>
            <span
              className={`nav-indicator mr-4 h-px w-8 bg-slate-400 transition-all group-hover:w-16 group-hover:bg-yellow-200 group-focus-visible:w-16 group-hover:h-[3px] group-focus-visible:bg-yellow-200 motion-reduce:transition-none`}
            ></span>
            <span
              className={`nav-text text-lg font-bold uppercase tracking-widest text-slate-500  group-hover:text-yellow-200 group-focus-visible:text-yellow-200`}
            >
              Skills
            </span>
          </a>
        </li>
        <li>
          <a href="#projects" className={`group flex items-center py-3`}>
            <span
              className={`nav-indicator mr-4 h-px w-8 bg-slate-400 transition-all group-hover:w-16 group-hover:bg-yellow-200 group-focus-visible:w-16 group-hover:h-[3px] group-focus-visible:bg-yellow-200 motion-reduce:transition-none`}
            ></span>
            <span
              className={`nav-text text-lg font-bold uppercase tracking-widest text-slate-500 group-hover:text-yellow-200 group-focus-visible:text-yellow-200`}
            >
              Projects
            </span>
          </a>
        </li>
        <li>
          <a href="#blog" className={`group flex items-center py-3`}>
            <span
              className={`nav-indicator mr-4 h-px w-8 bg-slate-400 transition-all group-hover:w-16 group-hover:bg-yellow-200 group-focus-visible:w-16 group-hover:h-[3px] group-focus-visible:bg-yellow-200 motion-reduce:transition-none`}
            ></span>
            <span
              className={`nav-text text-lg font-bold uppercase tracking-widest text-slate-500 group-hover:text-yellow-200 group-focus-visible:text-yellow-200`}
            >
              Blog
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
