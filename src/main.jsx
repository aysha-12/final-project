
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import AuthProvider from './Component/ContextApi/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')).render(

 
  <AuthProvider>
      <App />

    {/* <Toaster position="bottom-right" reverseOrder={false} >
    
    </Toaster> */}

  </AuthProvider>
  

)

