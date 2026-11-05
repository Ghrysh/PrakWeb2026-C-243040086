import { createRoot } from 'react-dom/client';
import HelloWorld from './HelloWord';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelloWorld />
  </StrictMode>
);