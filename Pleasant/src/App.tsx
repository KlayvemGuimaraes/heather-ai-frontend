import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Transacao from './pages/Transacao';
import Home from './pages/Home/Home';
import Discover from './pages/Discover/Discover';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/transaction" element={<Transacao />} />
        <Route path="/home" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </Router>
  );
}

export default App;
