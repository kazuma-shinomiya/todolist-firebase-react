import logo from './logo.svg';
import './App.css';
import './service/firebase';
import { AuthProvider } from './providers/AuthProvider';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <AuthProvider>
      <Header />
      <Dashboard />
    </AuthProvider>
  );
}

export default App;
