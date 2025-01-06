import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {PropertyContextProvider} from "./components/context.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <PropertyContextProvider>
    <App /> 
    </PropertyContextProvider>
     
  </StrictMode>,
)
