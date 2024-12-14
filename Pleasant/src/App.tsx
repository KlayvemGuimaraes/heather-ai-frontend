import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registro from './pages/Registro';
import Transacao from './pages/Transacao';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registro />} />
        <Route path="/transacao" element={<Transacao />} />
      </Routes>
    </Router>
  );
}

export default App;
