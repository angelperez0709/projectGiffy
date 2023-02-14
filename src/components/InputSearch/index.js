import React,{useState,useRef, useEffect} from "react";
import {useLocation} from 'wouter';
import magnifyingGlass from 'assets/magnifyingGlass.png'
import './InputSearch.css'
export default function InputSearch(){
    const [keyword,setKeyword] = useState('')
    const [path,pushLocation] = useLocation()
    const inputRef = useRef()
    const handleSubmit = evt =>{
        evt.preventDefault()
        if(keyword.trim()===''){
            return;
        } 
        pushLocation(`/search/${keyword}`)
        setKeyword('')
    }
    const handleChange = evt =>{
        setKeyword(inputRef.current.value)
    }


let placeholderIndex = 0;
const placeholderSpeed = 1000;
useEffect(()=>{
function animatePlaceholder() {
    const placeholder = inputRef.current.getAttribute('placeholder');
   // const placeholder = inputRef.current.getAttribute('placeholder');
    //inputRef.current.setAttribute('placeholder', placeholder.substring(placeholderIndex, placeholder.length) + placeholder.substring(0, placeholderIndex));
     // placeholderIndex = (placeholderIndex + 1) % placeholder.length;
  //setTimeout(animatePlaceholder,placeholderSpeed)
}
animatePlaceholder()
return ()=>{
    //cancelAnimationFrame(animatePlaceholder)
}
},[])



    return (<form className="searcher" onSubmit={handleSubmit}>
    <input type="text" 
    value={keyword}
    onChange={handleChange}
    ref={inputRef}
    placeholder="Search a gif"
    />
     <img onClick={handleSubmit} alt='Search' src={magnifyingGlass}/>
</form>)
}