import React from 'react';
import ReactDom from 'react-dom';
import {Router_Concept} from './Router_Concept';
import { BrowserRouter } from 'react-router-dom';

import './index.css';






  ReactDom.render(
      <div >
         
        <BrowserRouter>
              <Router_Concept/>
        </BrowserRouter>
        

       </div>
    
  , document.getElementById("root"));




