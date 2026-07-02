import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './style.css'
// import { BrowserRouter } from 'react-router-dom'
import 'primereact/resources/themes/lara-light-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import Axios1 from './axios/axios/Axios1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter> */}
        <App />
        {/* <Axios1/> */}
    {/* </BrowserRouter> */}
  </StrictMode>,
)
