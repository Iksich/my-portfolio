import React from 'react';
import './styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { Home } from './components/home/Home';

export const App: React.FC = () => {
  return (
    <div>
      <Home />
    </div>
  );
};
