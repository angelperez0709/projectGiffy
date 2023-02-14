import React from "react";
import './Option.css'
import { Link } from "wouter";

export default function Option({name}){
    return <div className="option">

        <Link to={`/detail/${name}`}>{name}</Link>
    </div>
}