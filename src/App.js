// App.js
// tuodaan kaikki tarvittavat kirjastot eli pelkkä react
import React from 'react';
//tuodaan kaikki komponentit
import LoanList from './components/LoanList'; 
import LoanForm from './components/LoanForm'; 
import LoanAggregations from './components/LoanAggregations'; 
//jakaa tiedot komponenttien kesken?
import { LoanProvider } from './components/LoanContext'; 
//css tiedosto
import './App.css';

//app funktio, luo sivun
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

//app funktiota voidaan käyttää muissa tiedostoissa
export default App;
