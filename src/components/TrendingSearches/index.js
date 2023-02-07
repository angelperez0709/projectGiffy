import React, { useEffect, useState,useRef } from "react";
import getTrendingGifs from '../../services/getTrendingGifs'
import Category from "../Category";
import flame from '../../assets/flame.png'
import './TrendingSearches.css'
export default function TrendingSearches(){
    const carrouselRef = useRef();
    const [trends,setTrends] = useState([])

    useEffect(function(){
        getTrendingGifs().then(setTrends)
    },[])
    return  <>
    <div className="trends">
        <div>
            <span>Trends</span>
            <img src={flame}/>
        </div>
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