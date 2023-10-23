import { expect, test } from 'vitest';
import { screen } from '@testing-library/react';
import Dokumentliste from './Dokumentliste';
import { render } from '../../../vitest-setup.tsx';

test("Dokumenter og vedlegg blir rendret som de skal", async () => {
  render(<Dokumentliste />);

  expect(
    await screen.findByRole("heading", {
      name: "Søknad om å beholde arbeidsavklaringspenger under opphold i utlandet",
      level: 3,
    })
  ).toBeInTheDocument();

  expect(
    await screen.findByRole("link", {
      name: "Kvitteringsside for dokumentinnsending",
    })
  ).toBeInTheDocument();
});