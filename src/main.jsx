import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GroupProvider } from './contexts/GroupContext.jsx'
import { MobileViewProvider } from './contexts/MobileViewContext.jsx'
import { NotesProvider } from './contexts/NotesContext.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GroupProvider>
      <NotesProvider>
        <MobileViewProvider>
          <App />
        </MobileViewProvider>
      </NotesProvider>
    </GroupProvider>
  </BrowserRouter>
);
