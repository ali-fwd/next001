import MyLink from "../MyLink";

const Navigation = () => {
  const navLinks = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" },
  ];

  const user = true;

  if (!user) {
    navLinks.push(
      { path: "/register", title: "Register" },
      { path: "/login", title: "Login" }
    );
  } else {
    navLinks.push({ path: "/profile", title: "Profile" });
  }

  return (
    <nav>
      <ul className="flex items-center gap-5">
        {navLinks.map((navlink) => (
          <li key={navlink.path}>
            <MyLink path={navlink.path} title={navlink.title} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
