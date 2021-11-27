import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    <a key={links.home} href="#home">home</a>
    <a key={links.about} href="#about">about</a>
    <a key={links.projects} href="#projects">projects</a>
  </nav>;
}

export default NavBar;

// In the `NavBar` component, there is an array with three strings representing
// each link on the page. For each of those strings, create an `<a>` tag that looks
// like this:

// ```jsx
// <a href="#home">home</a>
// ```