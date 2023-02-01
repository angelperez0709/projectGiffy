import React from "react";
import ListOfGifs from "../../components/ListOfGifs";
import  {useGifs}  from "../../hooks/useGifs";
import './SearchResults.css'
import Spinner from '../../components/Spinner'

export default function SearchResults({params}){
    console.log('-')
    const {keyword} = params
    const {loading,gifs} = useGifs({keyword})
    return <>
    {
        loading ? <Spinner />
        :
    <div className="listOfGifs">
    <ListOfGifs gifs={gifs} />
    </div>
    }
    </>
}