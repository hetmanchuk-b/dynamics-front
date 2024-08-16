import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/index.css'
import CatalogPage from "./catalog-page";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CatalogPage />
  </StrictMode>,
)
