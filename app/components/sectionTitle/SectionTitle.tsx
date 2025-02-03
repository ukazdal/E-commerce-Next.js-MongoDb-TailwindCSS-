import Link from "next/link";
import React from "react";

interface SectionTitleProps {
  title?: string;
  subTitle?: string;
  center?: boolean;
  link?: string;
  linkTitle?: string;
  linkIcon?: React.ReactNode;
  allClass?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subTitle,
  center,
  link,
  linkTitle,
  linkIcon,
  allClass,
}) => {
  return (
    <div
      className={`${
        center ? "justify-center text-center" : "justify-between text-start"
      } flex items-center  mb-10 ${allClass}`}
    >
      {title && (
        <div>
          <h1>{title}</h1>
          <p>{subTitle}</p>
        </div>
      )}
      {link && (
        <Link href={link || "#"}>
          <div className="flex items-center gap-x-2  cursor-pointer hover:text-linkHover duration-300">
            <div className="">{linkTitle}</div>
            <div>{linkIcon}</div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default SectionTitle;
