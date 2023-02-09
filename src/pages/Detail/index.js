import React, { useContext } from "react";
import StatiContext from 'Context/StaticContext'
import GifsContext from "Context/GifsContext";
import Gif from "components/Gif";
export default function Detail({params}){
    const staticContext = useContext(StatiContext)
    console.log(staticContext)
    const {gifs} = useContext(GifsContext)
    console.log(gifs)
    const gif = gifs.find(singleGif =>
         singleGif.id === params.id)
         console.log(gif)
    return <Gif {...gif} />
}