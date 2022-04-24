import React, { useEffect, useState } from "react";
import Dropdown from "./components/Dropdown/Dropdown";
import { DropdownLinkProps } from "./components/Dropdown/DropdownLink/DropdownLink";
import CSS from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCoffee } from "@fortawesome/free-solid-svg-icons";
import LinkedInLogo from "../../assets/linkedin.svg";
import GitHubLogo from "../../assets/github.svg";
import MyPicture from "../../assets/me.jpg";

export interface NavProps {
  title: string;
}
const links: DropdownLinkProps[] = [
  {
    href: "#",
    title: "Linkedin",
    logo: <img src={LinkedInLogo} width={20}/>
  },
  {
    href: "#",
    title: "Github",
    logo : <img style={{filter : "contrast(0)"}} src={GitHubLogo} width={20}/>
  },
];

function Navbar(props: NavProps) {
  return (
    <div className={CSS.navbar}>
      <div className={CSS.left}>
        <div className={CSS.pp}></div>
        <div className={CSS.logo}>{props.title}</div>
      </div>
      <div className={CSS.right}>
        <div>
          <Dropdown title="My Links" links={links} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
