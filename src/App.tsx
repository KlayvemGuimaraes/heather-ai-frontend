import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from "./Routes";

import AuthProvider from "./providers/AuthProvider";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </Router>
    </React.StrictMode>
  );
}

export default App;
