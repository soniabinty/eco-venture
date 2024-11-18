import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import React from 'react';


import {
  RouterProvider
 
} from "react-router-dom";


import "./index.css";


import router from './componants/route/Route.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
