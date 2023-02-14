import React, { useContext } from "react";
import GifsContext from "Context/GifsContext";
import Gif from "components/Gif";
import './Detail.css';
export default function Detail({params}){
    const {gifs} = useContext(GifsContext)
    console.log(gifs)
    const gif = gifs.find(singleGif =>
         singleGif.id === params.id)
         console.log(gif)
    return <div className="detail">
                <Gif {...gif} />
            </div>
}