import Image from "next/image";
import React from "react";
import Link from "./Link";

const BlogCard = () => {
  return (
    <div
      className={`flex flex-row h-min-[250px] w-[518px] py-4 px-6 rounded-2xl bg-slate-50 bg-opacity-5 bg-clip-padding backdrop-filter backdrop-blur-sm `}
    >
          <Image
          className={`min-w-[120px]`}
            src={"/img/docker.png"}
            alt={"una"}
            height={80}
            width={120}
          />
        <Link
          className={`h-6 w-6 text-slate-200 flex-1`}
          href={`https://github.com/LeanMendez/`}
        >
          <h4
            className={`text-base underline leading-6 duration-300 inline-block my-4`}
          >
            Learn how to Dockerize your applications
          </h4>
        </Link>
    </div>
  );
};

export default BlogCard;
