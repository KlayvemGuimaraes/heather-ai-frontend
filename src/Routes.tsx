import { PropsWithChildren } from 'react';
import { Routes as Router, Route, Outlet } from 'react-router-dom';
import Auth from './pages/Auth';
import Transaction from './pages/Transaction/Transaction';
import Home from './pages/Home/Home';
import Discover from './pages/Discover/Discover';
import Chat from "./pages/Chat/Chat"
import './App.module.css';

import { useAuth } from './providers/AuthProvider';

const PrivateRoutes = () => {
  const auth = useAuth();

  if (auth.user === undefined) window.location.href = '/';

  return <Outlet />
}

function AppRoutes(props: PropsWithChildren) {
  return (
    <Router>
      <Route path="/" element={<Auth />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/transactions" element={<Transaction />} />
      </Route>
    </Router>
  )
}

export default AppRoutes;