import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Calculator from './components/Calculator';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <Calculator />
    </ErrorBoundary>
  );
}

export default App;
