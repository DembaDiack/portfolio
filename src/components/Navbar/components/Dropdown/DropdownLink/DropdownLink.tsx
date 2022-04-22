import React from 'react'
import CSS from "./DropdownLink.module.css";

export interface DropdownLinkProps 
{
  title : string,
  href : string,
  logo? :JSX.Element
}

function DropdownLink(props:DropdownLinkProps) {
  return (
    <a href={props.href} className={CSS.dropdownLink}>
      <div className={CSS.left}>
          <div className={CSS.logo}>
            {props.logo}
          </div>
      </div>
      <div className={CSS.right}>
            <div>
              {props.title}
            </div>
      </div>
    </a>
  )
}

export default DropdownLink