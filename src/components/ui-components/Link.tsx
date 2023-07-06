import { useState, useEffect } from "react";
import NextLink from "next/link";
import useLinks from "@/hooks/useLinks";

interface ILink {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const Link = ({ children, href, className }: ILink) => {
  const [host, setHost] = useState<string>("");

  useEffect(() => {
    setHost(window.location.host);
  }, []);

  const extLink = useLinks(href, host);
  const classNameStyle = `${className} group/link underline underline-offset-4 hover:text-yellow-200`
    
  return (
    <NextLink
      href={href}
      className={classNameStyle}
      target={extLink ? "_blank" : undefined}
      rel={extLink ? "noopener noreferrer" : undefined}
    >
      {children}
      {extLink && (
        <span>
          <svg
            className={` ${classNameStyle} inline-block mb-2 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-hover/link:text-yellow-200 hover:drop-shadow-neon group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"

          >
            <title />

            <g id="Complete">
              <g id="arrow-up-right">
                <g>
                  <polyline
                    data-name="Right"
                    fill="none"
                    id="Right-2"
                    points="18.7 12.4 18.7 5.3 11.6 5.3"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />

                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="5.3"
                    x2="17.1"
                    y1="18.7"
                    y2="6.9"
                  />
                </g>
              </g>
            </g>
          </svg>
        </span>
      )}
    </NextLink>
  );
};

export default Link;
