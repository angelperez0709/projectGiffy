import React from "react";
import { Link } from "wouter";
import './Category.css'

export default function Category({category}){
    return <div className="category">
        <Link to={`/search/${category}`} >{category}</Link>
    </div>
}