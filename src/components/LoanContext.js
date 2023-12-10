// LoanContext.js, tuodaan kirjasto
import React, { createContext, useContext, useReducer } from 'react';
//luodaan react-konteksti?
const LoanContext = createContext();
//alustetaan tila lainatiedoille?
const initialState = {
  loans: [],
};
// Reducer-funktio, joka käsittelee tilan muutokset
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
// Komponentti joka tarjoaa kontekstin lapsikomponenteille
const LoanProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LoanContext.Provider value={{ state, dispatch }}>
      {children}
    </LoanContext.Provider>
  );
};
// Hook-funktio joka palauttaa kontekstin arvon
const useLoanContext = () => {
  return useContext(LoanContext);
};
//exportataan, annetaan muiden käytettäväksi
export { LoanProvider, useLoanContext };
