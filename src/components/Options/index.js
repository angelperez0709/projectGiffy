import React from "react";
import  Option  from 'components/Option'
export default function Options(){
    const OPTIONS_CHOOSE = ['Entertainament','Sport','Stickers']
    return <>
    {
        OPTIONS_CHOOSE.map(option=><Option name={option}></Option>)
    }
        </>

}