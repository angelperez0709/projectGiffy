import {useContext, useEffect,useState } from "react"
import getTrendingGifs from "../services/getTrendingGifs"
import  GifsContextProvider from "Context/GifsContext"
export function useTrendingGifs(){
const {gifs,setGifs} = useContext(GifsContextProvider)
useEffect(function(){
    getTrendingGifs().then(gifs=>{
        setGifs(gifs)
    })
},[])
    return gifs
}