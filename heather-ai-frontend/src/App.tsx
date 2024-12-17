import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Transaction from './pages/Transaction';
import Home from './pages/Home/Home';
import Discover from './pages/Discover/Discover';
import Chat from "./pages/Chat/Chat"
import './App.module.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/transactions" element={<Transaction />} />
        <Route path="/home" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
