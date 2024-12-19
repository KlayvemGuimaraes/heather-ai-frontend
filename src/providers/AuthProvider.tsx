import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../services/api';

type LoginType = {
  wallet_address: string;
  password: string;
}

interface ProviderProps {
  user: string | null,
  token: string,
  login(data: LoginType): Promise<boolean>,
  logout(): void,
}

const AuthContext = createContext<ProviderProps>({
  user: null,
  token: '',
  login: async () => { return false },
  logout: () => { }
})

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const storedInfo = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}') : null
  const [user, setUser] = useState<string | null>(storedInfo?.wallet_address)
  const [token, setToken] = useState(storedInfo?.token || '')
  const navigate = useNavigate();

  const login = async (data: LoginType): Promise<boolean> => {

    try {
      const response = await api.post('/auth/authenticate', {
        wallet_address: data.wallet_address,
        password: data.password
      });
      const token = response.data.token
      const obj = { ...response.data.user, token }
      setUser(data.wallet_address)
      setToken(token);
      localStorage.setItem('user', JSON.stringify(obj));
      navigate('/');
    } catch {
      console.log('test')
      return false;
    }
    return false;
  }

  const logout = () => {
    setUser(null)
    setToken('')
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout }
    }>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => {
  return useContext(AuthContext)
}
