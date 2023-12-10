// LoanList.js
//kirjastot
import React, { useState } from 'react';
import { useLoanContext } from './LoanContext';
//loanlist komponentti
const LoanList = () => {
  const { state, dispatch } = useLoanContext();
  const [reductionAmount, setReductionAmount] = useState('');
  // Käsittelijä, joka suoritetaan kun laina halutaan poistaa

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_LOAN', payload: id });
  };
  // Käsittelijä, joka suoritetaan kun halutaan vähentää lainan velkaa

  const handleReduceDebt = (id) => {
        // Otetaan käyttäjän antama määrä ja tarkistetaan, että se on kelvollinen numero ja suurempi kuin 0

    const amount = parseFloat(reductionAmount);
    if (!isNaN(amount) && amount > 0) {
      dispatch({ type: 'REDUCE_DEBT', payload: { id, amount } });

      // Automatically delete the person if their debt is reduced to 0
      const updatedDebtors = state.loans.filter((loan) => loan.id !== id || loan.debt > 0);
      dispatch({ type: 'SET_LOANS', payload: updatedDebtors });

      setReductionAmount('');
    }
  };
  // Palautetaan JSX joka esittää lainojen listan ja käyttöliittymän niiden muokkaamiseen
  return (
    <div>
      <h2>Lainalista</h2>
      <ul>
        {state.loans.map((loan) => (
          <li key={loan.id}>
            {loan.loaner} on velkaa {loan.debt} €{' '}
            <input
              type="number"
              placeholder="Lainanvähennys"
              value={reductionAmount}
              onChange={(e) => setReductionAmount(e.target.value)}
            />
            <button onClick={() => handleReduceDebt(loan.id)}>Reduce Debt</button>
            <button onClick={() => handleDelete(loan.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
//viedään loanlist muiden käytettäväksi
export default LoanList;
