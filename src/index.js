import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//import express from 'express';
//const routes = express.Router();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

/*
routes.get('/test', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});
*/