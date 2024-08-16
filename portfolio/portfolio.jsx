import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/index.css'
import PortfolioPage from "./portfolio-page";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortfolioPage />
  </StrictMode>,
)
