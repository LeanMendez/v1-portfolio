import Image from "next/image";
import React from "react";
import Link from "./Link";
import Pill from "./Pills";
import { MDXRemote } from "next-mdx-remote";
import { IProjects } from "@/types";


const ProjectCard:React.FC<IProjects>= (props) => {
  return (
    <div
      className={`group/link lg:h-min-[250px] lg:w-[518px] border-[1px] border-slate-200 border-opacity-10 sm:hover:shadow-muteNeon p-3 lg:p-8 rounded-lg sm:hover:bg-slate-50 sm:hover:bg-opacity-5 bg-clip-padding backdrop-filter backdrop-blur-sm `}
    >
      <Link
      className={`h-6 w-6 text-slate-200 no-underline`}
      href={props.external ? props.external  : props.github}
      icon={false}
      ><span className={`text-2xl leading-6 duration-300 inline-block mb-4`}>{props.title}</span>
      <div className={`flex flex-row`}>
      <aside className={`min-w-[120px] hidden sm:block`}>
        <Image className={` mt-2 rounded ease-in duration-100 grayscale group-hover/link:grayscale-0 sm:order-1 sm:col-span-2 sm:translate-y-1`} src={`/img/${props.image}`} alt={props.title} height={88} width={120} />
      </aside>
      <main className="ml-6">
        <div className={`text-sm leading-normal  font-light text-slate-200`}>
        <MDXRemote {...props.source}/>
        </div>
        <div className={`flex flex-wrap mt-3 gap-2 max-w-[90%]`}>{props.tech.map(item=> <Pill key={item} str={item} />)}</div>
      </main>
      </div>
      </Link>
    </div>
  );
};

export default ProjectCard;