import MyLink from "../MyLink";

const Footer = () => {
  const footerLinks = [
    { path: "/privacy-policy", title: "Privacy Policy" },
    { path: "/terms-and-conditions", title: "Terms and Conditions" },
  ];

  return (
    <footer className="sticky bottom-0 left-0">
      <div className="w-4/5 mx-auto pt-5 border-t border-slate-500">
        <div className="flex items-center justify-between">
          <h3>my.Blog</h3>
          <ul className="flex items-center gap-5">
            {footerLinks.map((footerlink) => (
              <li key={footerlink.path}>
                <MyLink path={footerlink.path} title={footerlink.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
