import { createContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../services/api';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem('@context-demo:token');

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await api.get('/profile');

          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }

    loadUser();
  }, []);

  const signIn = async (data) => {
    const response = await api.post('/sessions', data);

    const { user: userResponse, token } = response.data;

    api.defaults.headers.authorization = `Bearer ${token}`;

    setUser(userResponse);
    // sessionstorage cookies
    localStorage.setItem('@context-demo:token', token);

    const toNavigate = location.state?.from?.pathname || '/dashboard';

    navigate(toNavigate, { replace: true });
  };

  return (
    <AuthContext.Provider value={{ user, signIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
