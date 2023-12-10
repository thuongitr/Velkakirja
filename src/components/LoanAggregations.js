// LoanAggregations.js
import React from 'react';
import { useLoanContext } from './LoanContext';
//loanaggregation funktio/komponentti
const LoanAggregations = () => {
//Käytetään useLoanContext-hookia hakeaksemme tilan (state) LoanContextista
  const { state } = useLoanContext();
// Lasketaan kokonaisvelka ja keskimääräinen velka lainojen tiedoista
  const totalDebt = state.loans.reduce((sum, loan) => sum + loan.debt, 0);
  const averageDebt = state.loans.length > 0 ? totalDebt / state.loans.length : 0;
// Palautetaan JSX, joka näyttää yhteenvedon
  return (
    <div>
      <h2>Lainojen yhteissuma ja keskiarvo</h2>
      <p>Lainaa yhteensä: {totalDebt} €</p>
      <p>Keskiarvo: {averageDebt} €</p>
    </div>
  );
};
//LoanAggregations komponentti muille käytettäväksi
export default LoanAggregations;
