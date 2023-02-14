import GifsContextProvider from "Context/GifsContext"
import {useContext, useEffect,useState } from "react"
import getGifs from "../services/getGifs"
export function useGifs({keyword,limit = 20} = {keyword : null,limit: 20}){
    console.log(limit)
const [gifs,setGifs] = useState([])
const [loading,setLoading] = useState(false)
useEffect(function(){
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
    setLoading(true)
    getGifs({keyword: keywordToUse,limit}).then(gifs=>{

        setGifs(gifs)
        setLoading(false)
        localStorage.setItem('lastKeyword',keywordToUse )
    })
},[keyword])
    return {gifs,loading}
}