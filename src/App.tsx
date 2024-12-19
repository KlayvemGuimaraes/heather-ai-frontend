import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Transaction from './pages/Transaction/Transaction';
import Home from './pages/Home/Home';
import Discover from './pages/Discover/Discover';
import Chat from "./pages/Chat/Chat"
import './App.module.css';

import AuthProvider from './providers/AuthProvider';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/transactions" element={<Transaction />} />
          <Route path="/home" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
