import React from "react";
import Gif from 'components/Gif'
import './ListOfGifs.css'


export default function ListOfGifs({gifs}){
    return <div className="listOfGifs">
    {
    gifs.map(({id,title,url}) => 
            <Gif key={id}
                  title={title} 
                  id= {id} 
                  url={url} 
            />)
    }
            </div>
}