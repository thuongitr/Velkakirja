// LoanForm.js
//kirjastot
import React, { useState } from 'react';
import { useLoanContext } from './LoanContext';

// LoanForm-komponentti
const LoanForm = () => {
  const { dispatch } = useLoanContext();
  const [loaner, setLoaner] = useState('');
  const [debt, setDebt] = useState('');

  // Tilat, jotka säilyttävät käyttäjän syötteitä
  const handleSubmit = (e) => {
    e.preventDefault();
        // Lähetetään ADD_LOAN-toiminto dispatchille uuden lain tiedoilla
    dispatch({
      type: 'ADD_LOAN',
      payload: { id: Date.now(), loaner, debt: parseFloat(debt) },
    });
    // Tyhjennetään syötteet
    setLoaner('');
    setDebt('');
  };
// return JSX, joka esittää lomakkeen
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Lainaaja"
        value={loaner}
        onChange={(e) => setLoaner(e.target.value)}
      />
      <input
        type="number"
        placeholder="Lainasumma"
        value={debt}
        onChange={(e) => setDebt(e.target.value)}
      />
      <button type="submit">Lisää laina</button>
    </form>
  );
};
//export loanform muiden käytettäväksi
export default LoanForm;
