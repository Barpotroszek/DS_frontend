import React from "react";
import { Link } from "react-router-dom";

export function PrimaryBtn({txt,  onClick, disabled}){
    return(
        <button className="btn btn-primary" onClick={onClick} disabled={disabled}>{txt}</button>
    )
}

export function SecondaryBtn({txt, onClick}){
    return(
        <button className="btn btn-secondary" onClick={onClick}>{txt}</button>
    )
}

export function SuccessBtn({txt,  onClick, disabled}){
    return(
        <button className="btn btn-success" onClick={onClick} disabled={disabled}>{txt}</button>
    )
}

export function OutlineBtn({txt, href, disabled}){
    if(href)
    
    return(
        <Link style={{color: "unset", textDecoration: "none"}} to={href} >
        <button className="btn btn-outline-primary" disabled={disabled}>{txt}</button>
        </Link>
    )
    return(
        <>
        <button disabled={disabled} className="btn btn-outline-primary">{txt}</button>
        </>
    )
}

export function OutlineDangerBtn({onClick, txt}){
    return(
        <button
            type="button"
            className="close btn btn-outline-danger"
            aria-label="Close"
            onClick={onClick}
          >
          <span aria-hidden="true">{txt}</span>
          </button>
    )
}

export function CheckboxBtn({i, txt, checked, action}){
    const f = (e) =>{
        action(i, e.target.checked);
    }
    return(
        <>
        <input name={"check-"+i} id={"check-"+i} onChange={f} checked={checked} type="checkbox" className="btn-check" />
        <label  htmlFor={"check-"+i} className="btn btn-outline-primary">{txt}</label>
        </>
    )
}


