// LoanAggregations.js
import React from 'react';
import { useLoanContext } from './LoanContext';

const LoanAggregations = () => {
  const { state } = useLoanContext();

  const totalDebt = state.loans.reduce((sum, loan) => sum + loan.debt, 0);
  const averageDebt = state.loans.length > 0 ? totalDebt / state.loans.length : 0;

  return (
    <div>
      <h2>Lainojen yhteissumma ja keskiarvo</h2>
      <p>Lainaa yhteensä: {totalDebt} €</p>
      <p>Keskiarvo: {averageDebt} €</p>
    </div>
  );
};

export default LoanAggregations;
