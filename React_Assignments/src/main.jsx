import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './components/Login.jsx'
import UseStateEx from './components/UseStateEx.jsx';
import UseEffectEx from './components/UseEffectEx.jsx'
import First from './practice/First.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Login/> */}
    {/* <UseStateEx/> */}
    {/* <UseEffectEx/> */}
    <First/>
  </StrictMode>,
)
