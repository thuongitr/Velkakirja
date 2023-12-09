// LoanList.js
import React, { useState } from 'react';
import { useLoanContext } from './LoanContext';

const LoanList = () => {
  const { state, dispatch } = useLoanContext();
  const [reductionAmount, setReductionAmount] = useState('');

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_LOAN', payload: id });
  };

  const handleReduceDebt = (id) => {
    const amount = parseFloat(reductionAmount);
    if (!isNaN(amount) && amount > 0) {
      dispatch({ type: 'REDUCE_DEBT', payload: { id, amount } });

      // Automatically delete the person if their debt is reduced to 0
      const updatedDebtors = state.loans.filter((loan) => loan.id !== id || loan.debt > 0);
      dispatch({ type: 'SET_LOANS', payload: updatedDebtors });

      setReductionAmount('');
    }
  };

  return (
    <div>
      <h2>Loan List</h2>
      <ul>
        {state.loans.map((loan) => (
          <li key={loan.id}>
            {loan.loaner} owes ${loan.debt}{' '}
            <input
              type="number"
              placeholder="Reduction amount"
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

export default LoanList;
