import React from "react";
import { Link } from "wouter";
import './Category.css'
import flame from 'assets/flame.png'
export default function Category({category}){
    return <div className="category">
        <Link to={`/search/${category}`} >{category}<img src={flame}/></Link>
    </div>
}