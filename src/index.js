import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Slider from './Slider';
import Selector from './Selector';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Slider />
      <Selector />
    </div>
  </React.StrictMode>
);

reportWebVitals();
