import ToastContainer from './components/ToastContainer';
import AuthProvider from './contexts/AuthContext';
import Routes from './routes';
import Global from './styles/global';

function App() {
  return (
    <AuthProvider>
      <Global />
      <Routes />
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
