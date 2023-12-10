// LoanContext.js
import React, { createContext, useContext, useReducer } from 'react';

const LoanContext = createContext();

const initialState = {
  loans: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_LOAN':
      return { loans: [...state.loans, action.payload] };
    case 'DELETE_LOAN':
      return { loans: state.loans.filter((loan) => loan.id !== action.payload) };
    case 'REDUCE_DEBT':
      return {
        loans: state.loans.map((loan) =>
          loan.id === action.payload.id
            ? { ...loan, debt: loan.debt - action.payload.amount }
            : loan
        ),
      };
    default:
      return state;
  }
};

const LoanProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LoanContext.Provider value={{ state, dispatch }}>
      {children}
    </LoanContext.Provider>
  );
};

const useLoanContext = () => {
  return useContext(LoanContext);
};

export { LoanProvider, useLoanContext };
