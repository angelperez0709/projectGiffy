import React, { useState,useRef } from "react";
import {useLocation} from 'wouter';
import './Home.css'
import TrendingSearches from '../../components/TrendingSearches'
export default function Home(){
    const [keyword,setKeyword] = useState([])
    const [path,pushLocation] = useLocation()
    const inputRef = useRef()
    const handleSubmit = evt =>{
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
        inputRef.value = '';
    }
    const handleChange = evt =>{
        setKeyword(inputRef.current.value)
    }
    return <>
    <form onSubmit={handleSubmit}>
        <div className="searcher">
            <span onClick={handleSubmit}>Search</span>
        <input type="text" 
        value={keyword}
        onChange={handleChange}
        ref={inputRef}
        placeholder="Search a gif"
        />
        </div>
    <TrendingSearches></TrendingSearches>
    </form>
    </>
}