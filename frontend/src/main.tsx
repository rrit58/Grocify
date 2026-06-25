import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './contexts/ThemeContext.tsx'
import { AuthProvider } from './contexts/AuthContext.tsx'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <App />
        <Toaster
          position="bottom-right"
          richColors
          toastOptions={{
            duration: 5000,
            // classNames: {
            //   toast: "custom-toast",
            // },
          }} />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
)
