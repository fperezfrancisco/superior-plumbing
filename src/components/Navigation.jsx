import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header className="bg-blue-900  w-full h-fit p-4 py-6 flex mx-auto left-0 right-0 items-center justify-between md:p-6 md:max-w-[2500px]">
      <div className="text-[1rem] md:text-[1.25rem] font-bold text-white p-3 bg-blue-950 rounded-lg border-[3px] border-white">
        {" "}
        <Link to="/">Superior Plumbing</Link>
      </div>
      <nav className="ml-4 hidden text-white md:flex">
        <ul className="list-none flex flex-row gap-3 h-full text-sm">
          <li className="flex h-full px-3 hover:underline underline-offset-8">
            <Link to="/">Our Services</Link>
          </li>
          <li className="flex h-full px-3 hover:underline underline-offset-8">
            <Link to="/">About Us</Link>
          </li>
          <li className="flex h-full px-3 hover:underline underline-offset-8">
            <Link to="/">How we work</Link>
          </li>
          <li className="flex h-full px-3 hover:underline underline-offset-8">
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
