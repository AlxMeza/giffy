import React from 'react';
import './App.css';
import Search from './components/Search/Search';
import Home from './pages/Home/Home';
import StaticContext from './context/StaticContext'
import {GifContextProvider} from './context/GifContext';
import Detail from './pages/Detail/index';


import {Link, Route} from 'wouter';

function App() {
  return (
    <StaticContext.Provider value={{name: 'imhere', status: true }}>
      <div className="App">
        <section className="App-content">
          <GifContextProvider>
              <Link to="/" >
                <figure className="App-logo">
                  <img src="/Giffy.png" alt="Giffy Logo" className="App-logo"/>
                </figure>
              </Link>
              <Route component={Home} path="/" />
              <Route component={Search} path='/search/:keyword'></Route>
              <Route component={Detail} path='/gif/:id'></Route>
              <Route component={() => <h1>Error 404 Page Not Found</h1>} path='/404' />
          </GifContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
