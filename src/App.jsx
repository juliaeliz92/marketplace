import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Header } from './components';
import { ROUTES } from './constants';

const routes = ROUTES.map((route, index) => 
  (<Route path={route.route} key={index} element={route.element} />))

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          {routes}
        </Routes>
      </Router>
    </div>
  )
};

export default App;
