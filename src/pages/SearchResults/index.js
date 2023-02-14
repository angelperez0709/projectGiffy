import React from "react";
import ListOfGifs from "components/ListOfGifs";
import  {useGifs}  from "hooks/useGifs";
import './SearchResults.css'
import Spinner from 'components/Spinner'

export default function SearchResults({params = {keyword:''}} = {keyword:''}){
        const {keyword} = params
    const {loading,gifs} = useGifs({keyword})
    return <>
    {
        loading ? <Spinner />
        :
            <ListOfGifs gifs={gifs} />
    }
    </>
}