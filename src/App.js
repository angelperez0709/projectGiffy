import React, { useRef, useState }  from "react";
import {Route} from 'wouter';
import 'App.css';
import Home from 'pages/Home'
import SearchResults from 'pages/SearchResults'
import Detail from 'pages/Detail'
import { GifsContextProvider } from "Context/GifsContext";
import Header from "components/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <section className="App-content">
 
    <GifsContextProvider>
        <Route component={SearchResults} path = "/search/:keyword"/>
        <Route component={SearchResults} path = "/search/"/>
        <Route path="/gif/:id" component={Detail} />
          <Route path='/' component={Home} />
    </GifsContextProvider>
      </section>
    </div>
  );
}

export default App;
