import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/index.css'
import AboutPage from "./about-page";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AboutPage />
  </StrictMode>,
)
