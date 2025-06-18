import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Authenticator } from '@aws-amplify/ui-react';
import './index.css'
import App from './App.jsx'
import '@aws-amplify/ui-react/styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authenticator>
    <App />
    </Authenticator>
  </StrictMode>,
)
