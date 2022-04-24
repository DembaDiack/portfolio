import React from 'react'
import CSS from "./Card.module.css";

interface cardProps {
    icon : JSX.Element,
    title:string,
    body:string
}
function Card(props:cardProps) {
  return (
    <div className={CSS.card}>
        <div className={CSS.left}>
            <div className={CSS.icon}>
                {props.icon}
            </div>
        </div>
        <div className={CSS.right}>
            <div className={CSS.top}>
                {props.title}
            </div>
            <div className={CSS.bottom}>
                {props.body}
            </div>
        </div>
    </div>
  )
}

export default Card