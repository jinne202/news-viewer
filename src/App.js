import React from 'react';
import {Route} from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import './App.scss';

const App = () => {
  return(
    <div className = "newsContainer">
      <Route path ="/:category?" component={NewsPage}/>;
    </div>
  )
};

export default App;
