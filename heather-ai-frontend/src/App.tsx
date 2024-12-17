import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Transacao from './pages/Transacao';
import Home from './pages/Home/Home';
import Discover from './pages/Discover/Discover';
import Chat from "./pages/Chat/Chat"
import './App.module.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/transacao" element={<Transacao />} />
        <Route path="/home" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
