import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../services/api';

type LoginType = {
  wallet_address: string;
  password: string;
  remember: boolean;
}

interface ProviderProps {
  user: string | null,
  userId: string | null,
  userName: string | null;
  token: string,
  login(data: LoginType): Promise<string>,
  logout(): void,
  navigateTo(page: string): void,
}

const AuthContext = createContext<ProviderProps>({
  user: null,
  userId: null,
  userName: null,
  token: '',
  login: async () => { return '' },
  logout: () => { },
  navigateTo: () => { }
})

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const storedInfo = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}') : null;
  const [user, setUser] = useState<string | null>(storedInfo?.wallet_address);
  const [userId, setUserId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [token, setToken] = useState(storedInfo?.token || '');
  const navigate = useNavigate();

  const login = async (data: LoginType): Promise<string> => {
    let loginError = 'sucess';
    try {
      const response = await api.post('/auth/authenticate', {
        wallet_address: data.wallet_address,
        password: data.password
      });
      const token = response.data.token
      const obj = {
        ...{
          nickname: response.data.user.nickname,
          wallet_address: response.data.user.wallet_address
        }, token
      }
      setUser(data.wallet_address)
      setUserId(response.data.user.id);
      setUserName(response.data.user.nickname);
      setToken(token);
      localStorage.setItem('user', JSON.stringify(obj));
      if (data.remember) localStorage.setItem('connectedWallet', JSON.stringify(data.wallet_address));
      navigate('/home');
    } catch {
      loginError = 'error';
    }
    return loginError;
  }

  const logout = () => {
    setUser(null);
    setToken('');
    localStorage.removeItem('user');
    window.location.reload();
  }

  const navigateTo = (page: string) => {
    navigate(page);
  }

  return (
    <AuthContext.Provider value={{ user, userId, userName, token, login, logout, navigateTo }
    }>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => {
  return useContext(AuthContext)
}
