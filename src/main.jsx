import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)
