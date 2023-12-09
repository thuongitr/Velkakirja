// App.js
import React from 'react';
import LoanList from './components/LoanList'; 
import LoanForm from './components/LoanForm'; 
import LoanAggregations from './components/LoanAggregations'; 
import { LoanProvider } from './components/LoanContext'; 
import './App.css';

function App() {
  return (
    <LoanProvider>
      <div className="app">
        <h1>Velkakirja</h1>
        <LoanForm />
        <LoanList />
        <LoanAggregations />
      </div>
    </LoanProvider>
  );
}

export default App;
