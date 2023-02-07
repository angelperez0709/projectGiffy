import React from "react";
import './App.css';
import {Route,Link} from 'wouter';
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import StaticContext from './Context/StaticContext'
import Detail from './pages/Detail'
import { GifsContextProvider } from "./Context/GifsContext";

function App() {
  return (
    <StaticContext.Provider 
    value={{name:'angel',suscribe:true}}>
    <div className="App">
      <header className="App-header">
        <Link to={'/'}>Giffy</Link>
      </header>
      <section className="App-content">
      <GifsContextProvider>
        <Route path='/' component={Home} />
        <Route component={SearchResults}
        path = "/search/:keyword"/>
        <Route path="/gif/:id" component={Detail} />
        </GifsContextProvider>
      </section>
    </div>
    </StaticContext.Provider>
  );
}

export default App;
