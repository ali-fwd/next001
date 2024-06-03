"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MyLink = ({ path, title }) => {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      className={`${
        path === pathname ? "text-blue-500" : "text-white"
      } hover:text-blue-500 transition-all duration-300`}
    >
      {title}
    </Link>
  );
};

export default MyLink;
