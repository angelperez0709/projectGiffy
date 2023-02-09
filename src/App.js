import React, { useRef, useState }  from "react";
import 'App.css';
import {Route,Link,useLocation} from 'wouter';
import Home from 'pages/Home'
import SearchResults from 'pages/SearchResults'
import StaticContext from 'Context/StaticContext'
import Detail from 'pages/Detail'
import GifsContextProvider from "Context/GifsContext";
import magnifyingGlass from 'assets/magnifyingGlass.png'

function App() {
  const {keyword,setKeyword} = useState('')
    const [path,pushLocation] = useLocation()
    const inputRef = useRef()
    const handleSubmit = evt =>{
        evt.preventDefault()
        inputRef.current.value = '';
        if(keyword.trim()===''){
            return;
        } 
        pushLocation(`/search/${keyword}`)
    }
    const handleChange = evt =>{
        setKeyword(inputRef.current.value)
    }
  return (
    <div className="App">
      <header className="App-header">
        <Link to={'/'}>Giffy</Link>
      </header>
      <section className="App-content">
      <form onSubmit={handleSubmit}>
        <div className="searcher">
            <img onClick={handleSubmit} alt='Search' src={magnifyingGlass}/>
        <input type="text" 
        value={keyword}
        onChange={handleChange}
        ref={inputRef}
        placeholder="Search a gif"
        />
        </div>
    </form>
      <GifsContextProvider>
          <Route path='/' component={Home} />
        <Route component={SearchResults}
        path = "/search/:keyword"/>
        <Route path="/gif/:id" component={Detail} />
        </GifsContextProvider>
      </section>
    </div>
  );
}

export default App;
