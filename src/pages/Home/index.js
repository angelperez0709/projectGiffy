import React, { useState,useRef } from "react";
import {useLocation} from 'wouter';

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
        console.log(inputRef.current.value)
        setKeyword(inputRef.current.value)
    }
    return <>
    <form onSubmit={handleSubmit}>
        <input type="text" 
        value={keyword}
        onChange={handleChange}
        ref={inputRef}
        />

    </form>
    </>
}