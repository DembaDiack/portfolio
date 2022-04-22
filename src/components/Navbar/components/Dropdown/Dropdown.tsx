import React, { useEffect, useState } from 'react'
import CSS from "./Dropdown.module.css";
import DropdownLink, { DropdownLinkProps } from './DropdownLink/DropdownLink';

export interface DropdownProps 
{
    links:DropdownLinkProps[]
}

function Dropdown(props:DropdownProps) {

    const [dropdowns,setDropdowns] = useState<any>();

    useEffect(()=>{
        const linksJSX = props.links.map((link,index) => {
            return <DropdownLink key={index} href={link.href} logo={link.logo} title={link.title}/>
        });
        setDropdowns(linksJSX);
    },[]);

  return (
    <div className={CSS.dropdown}>
        <div className={CSS.title}>
            Dropdown title
        </div>
        <div className={CSS.body}>
            {dropdowns}
        </div>
    </div>
  )
}

export default Dropdown