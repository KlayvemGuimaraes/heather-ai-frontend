import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from "./Routes";

import AuthProvider from "./providers/AuthProvider";
import { SocketContext, socket } from './providers/SocketProvider';

function App() {
  return (
    <React.StrictMode>
      <SocketContext.Provider value={socket}>
        <Router>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </Router>
      </SocketContext.Provider >
    </React.StrictMode>
  );
}

export default App;
