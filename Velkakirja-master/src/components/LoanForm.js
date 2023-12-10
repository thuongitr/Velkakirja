// LoanForm.js
import React, { useState } from 'react';
import { useLoanContext } from './LoanContext';

const LoanForm = () => {
  const { dispatch } = useLoanContext();
  const [loaner, setLoaner] = useState('');
  const [debt, setDebt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_LOAN',
      payload: { id: Date.now(), loaner, debt: parseFloat(debt) },
    });
    setLoaner('');
    setDebt('');
  };

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

export default LoanForm;
