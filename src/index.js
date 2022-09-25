import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Routes,BrowserRouter as Router,Route} from "react-router-dom";
import BlackJack from './components/blackJack';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/"element={<BlackJack/>} />
        <Route exact path="/blackjack"element={<BlackJack/>}/>
      </Routes>
    </Router>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
