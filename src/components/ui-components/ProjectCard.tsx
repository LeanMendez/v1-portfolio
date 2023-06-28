import Image from "next/image";
import React from "react";
import Link from "./Link";
import Pill from "./Pills";


const ProjectCard = () => {
  return (
    <div
      className={` lg:h-min-[250px] lg:w-[518px] py-4 px-6 rounded-2xl bg-slate-50 bg-opacity-5 bg-clip-padding backdrop-filter backdrop-blur-sm `}
    >
      <Link
      className={`h-6 w-6 text-slate-200`}
      href={`https://github.com/LeanMendez/`}
      ><span className={`text-3xl underline leading-6 duration-300 inline-block my-4`}>Titulo del proyecto</span></Link>
      <div className={`flex flex-row`}>
      <aside className={`min-w-[120px] mr-3`}>
        <Image className={` mt-2 backdrop-saturate-50`} src={"/img/micro.png"} alt={"una"} height={80} width={120} />
      </aside>
      <main>
        <p className={`text-sm leading-normal font-light text-slate-200`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At eaque voluptatem, enim officia doloremque nam, natus quae perspiciatis asperiores soluta officiis, deserunt molestiae ducimus eum fugit. Recusandae necessitatibus corporis, rerum perspiciatis vitae vero molestiae ullam!
        </p>
        <div className={`flex mt-3 gap-2`}><Pill str="Node"/><Pill str="Typescript"/></div>
      </main>
      </div>
    </div>
  );
};

export default ProjectCard;