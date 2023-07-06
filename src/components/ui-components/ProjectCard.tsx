import Image from "next/image";
import React from "react";
import Link from "./Link";
import Pill from "./Pills";
import { MDXRemote } from "next-mdx-remote";
import { IMeta } from "@/types";


const ProjectCard:React.FC<IMeta>= (props) => {
  return (
    <div
      className={` lg:h-min-[250px] lg:w-[518px] py-4 hover:shadow-muteNeon px-6 rounded-lg hover:bg-slate-50 hover:bg-opacity-5 bg-clip-padding backdrop-filter backdrop-blur-sm `}
    >
      <Link
      className={`h-6 w-6 text-slate-200`}
      href={props.external ? props.external  : props.github}
      ><span className={`text-3xl underline leading-6 duration-300 inline-block my-4`}>{props.title}</span></Link>
      <div className={`flex flex-row`}>
      <aside className={`min-w-[120px] mr-3`}>
        <Image className={` mt-2 backdrop-saturate-50`} src={"/img/micro.png"} alt={"una"} height={80} width={120} />
      </aside>
      <main>
        <div className={`text-sm leading-normal font-light text-slate-200`}>
        <MDXRemote {...props.source}/>
        </div>
        <div className={`flex flex-wrap mt-3 gap-2 max-w-[90%]`}>{props.tech.map(item=> <Pill key={item} str={item} />)}</div>
      </main>
      </div>
    </div>
  );
};

export default ProjectCard;