import React, { useEffect, useState,useRef } from "react";
import getTrendingGifs from 'services/getTrendingGifs'
import Category from "components/Category";
import './TrendingSearches.css'
export default function TrendingSearches(){
    const carrouselRef = useRef();
    const [trends,setTrends] = useState([])

    useEffect(function(){
        getTrendingGifs().then(setTrends)
    },[])
    return  <>
    <div className="trends">
        <div className="trends-name" 
        ref={carrouselRef}
        >
        {
            trends.map(trend=><Category category={trend}/>)
        }
    </div>
    </div>
</>
}