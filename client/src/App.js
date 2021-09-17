import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// Routing
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Components
import Header from './components/Header';
import Home from './pages';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
// Styles
import { GlobalStyle } from './GlobalStyle';

import { getStocks } from './actions/stocks';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStocks());
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/portfolio'>
          <Portfolio />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Routes>
      <GlobalStyle />
      <footer>Created by <a href="http://benjaminshao.com">Benjamin Shao</a> (c) 2021</footer>
    </Router>
  );
};

export default App;
