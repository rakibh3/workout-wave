import { Box } from '@mui/material';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Box width="400px">
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
}

export default App;
