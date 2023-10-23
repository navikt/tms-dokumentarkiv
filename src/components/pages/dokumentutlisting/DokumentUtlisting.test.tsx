import { expect, test } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from '../../../../vitest-setup.tsx';
import DokumentUtlisting from './DokumentUtlisting.tsx';

test("Dokumentutlisting/nivå 2 rendres med alle korrekte elementer", async () => {
  render(<DokumentUtlisting />);

  //Sjekk at hovedoverskrift blir satt etter sakstema, vil være "Dokumenter" hvis ikke
  expect(
    await screen.findByRole("heading", {
      name: "Arbeidsavklaringspenger",
      level: 1,
    })
  ).toBeInTheDocument();
  
  //Sjekk at korrekt dato for sist endret vises
  expect(
    await screen.findByText("Sist endret 13.04.2023")
  ).toBeInTheDocument();
  
  //Sjekk at identifiserende tekst for hvilken representant en bruker dokumentarkivet på vises korrekt
  expect(
    await screen.findByText("for Sergio Sergiozen")
  ).toBeInTheDocument();
});