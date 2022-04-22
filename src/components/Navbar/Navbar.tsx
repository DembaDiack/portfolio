import React, { useEffect, useState } from "react";
import Dropdown from "./components/Dropdown/Dropdown";
import { DropdownLinkProps } from "./components/Dropdown/DropdownLink/DropdownLink";
import CSS from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCoffee } from "@fortawesome/free-solid-svg-icons";

export interface NavProps {
  title: string;
}
const links: DropdownLinkProps[] = [
  {
    href: "#",
    title: "Link 1",
    logo: <FontAwesomeIcon icon={faBars}/>
  },
  {
    href: "#",
    title: "Link 2",
    logo : <FontAwesomeIcon icon={faCoffee}/>
  },
];

function Navbar(props: NavProps) {
  return (
    <div className={CSS.navbar}>
      <div className={CSS.left}>
        <div className={CSS.logo}>{props.title}</div>
      </div>
      <div className={CSS.right}>
        <div>
          <Dropdown links={links} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
