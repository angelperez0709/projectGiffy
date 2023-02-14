import React from "react";
import InputSearch from 'components/InputSearch'
import './Header.css'
import Options from 'components/Options'
export default function Header(){
    
    return <header className="header">
        <div className="options">
            <Options></Options>
        </div>
        <InputSearch></InputSearch>
    
    </header>
}