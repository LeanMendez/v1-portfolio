import Image from "next/image";
import React from "react";
import Link from "./Link";
import { IArticles } from "@/types";

const BlogCard:React.FC<IArticles>= (props) => {
  return (
    <div
      className={`group/link h-min-[250px] border-[1px] border-slate-200 border-opacity-10 sm:hover:shadow-muteNeon lg:w-[518px] py-4 px-6 rounded-lg sm:hover:bg-slate-50 sm:hover:bg-opacity-5 bg-clip-padding backdrop-filter backdrop-blur-sm `}
    >
        <Link
          icon={true}
          className={`h-3 w-3 sm:h-6 sm:w-6 text-slate-200 gap-1`}
          href={props.external}
        >
          <h2
            className={` text-xs sm:text-lg  duration-300 inline-block `}
          >
            {props.title}
          </h2>
        </Link>
    </div>
  );
};

export default BlogCard;
