import { useState, useEffect } from "react";
import NextLink from "next/link";
import useLinks from "@/hooks/useLinks";

interface ILink {
  children: React.ReactNode;
  href: string;
  className?: string;
  icon: boolean
}

const Link = ({ children, href, className, icon }: ILink) => {
  const [host, setHost] = useState<string>("");

  useEffect(() => {
    setHost(window.location.host);
  }, []);

  const extLink = useLinks(href, host);
  const classNameStyle = `${className} group/link underline underline-offset-4 sm:group-hover/link:text-yellow-200`;

  return (
    <NextLink
      href={href}
      className={classNameStyle}
      target={extLink ? "_blank" : undefined}
      rel={extLink ? "noopener noreferrer" : undefined}
    >
      {children}
      {extLink && icon && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
            className={` ${classNameStyle} inline-block mb-2 transition-transform sm:group-hover/link:-translate-y-px sm:group-hover/link:translate-x-px sm:group-hover/link:text-yellow-200 sm:hover:drop-shadow-neon group-focus-visible/link:-translate-y-px group-focus-visible/link:translate-x-px motion-reduce:transition-none translate-y-px ml-px`}
          >
            <path
              fill="currentColor"
              d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03L9.28 7.78a.751.751 0 0 1-1.042-.018a.751.751 0 0 1-.018-1.042l3.75-3.75l-1.543-1.543A.25.25 0 0 1 10.604 1Z"
            />
          </svg>
      )}
    </NextLink>
  );
};

export default Link;
