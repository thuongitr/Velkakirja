//tuodaan taas kirjastot
import { render, screen } from '@testing-library/react';
//tuodaan komponentti App
import App from './App';
//testi joka kattoo että teksti renderöidään oikein
test('renders learn react link', () => {
  render(<App />);
  //etsitään näytöltä kohta "learn react"
  const linkElement = screen.getByText(/learn react/i);
  //tarkistetaan että se eli "learn react" on näytöllä
  expect(linkElement).toBeInTheDocument();
});
