import {useContext, useEffect,useState } from "react"
import getGifs from "../services/getGifs"
import GifsContext from '../Context/GifsContext'
export function useGifs({keyword} = {keyword : null}){
const {gifs,setGifs} = useContext(GifsContext)
const [loading,setLoading] = useState(false)
useEffect(function(){
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
    setLoading(true)
    getGifs({keyword: keywordToUse}).then(gifs=>{
        setGifs(gifs)
        setLoading(false)
        localStorage.setItem('lastKeyword',keywordToUse )
    })
},[keyword])
    return {gifs,loading}
}