import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/index.css'
import NewsPage from "./news-page";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NewsPage />
  </StrictMode>,
)
