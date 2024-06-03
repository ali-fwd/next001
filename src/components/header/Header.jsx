import React from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="sticky top-0 left-0">
      <div className="w-4/5 mx-auto">
        <div className="flex items-center justify-between pt-10 pb-5 border-b border-slate-400">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
