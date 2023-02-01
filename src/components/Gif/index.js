import React from "react";
import {Link} from 'wouter'
import './Gif.css'
export default function Gif({title,id,url}){

    return <div className="gif">
            <Link to={`/gif/${id}`}>
                <img alt= {title}
                src={url} />
            </Link>
        </div>
}