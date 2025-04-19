import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './AppRouter'

import { Navbar } from './features/navigation/components/Navbar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <AppRouter />
  </StrictMode>,
);
