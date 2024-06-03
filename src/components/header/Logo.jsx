import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-4xl text-bold hover:text-blue-500 transition-all duration-300"
    >
      my.Blog
    </Link>
  );
};

export default Logo;
