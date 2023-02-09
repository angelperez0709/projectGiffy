import React from "react";
import './Home.css'
import TrendingSearches from 'components/TrendingSearches'
import ListOfGifs from "components/ListOfGifs";
export default function Home(){
    //const {gifs} = useContext(GifsContext)
    const gifs = []
    return <>
      <TrendingSearches></TrendingSearches>
    {
        gifs.length > 0 ? 
        <>
        <div>Last search:asdf</div>
          <ListOfGifs gifs={gifs}></ListOfGifs>
        </>
         : null
    }
    </>
}