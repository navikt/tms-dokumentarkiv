import { expect, test } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../../../../vitest-setup.tsx";
import Landingsside from "./Landingsside.tsx";

test("Sakstemaer blir rendret slik de skal ", async () => {
  render(<Landingsside />);

  expect(
    await screen.findByRole("heading", {
      name: "Arbeidsavklaringspenger",
      level: 3,
    })
  ).toBeInTheDocument();

  expect(await screen.findByText("Sist endret 13.04.2023")).toBeInTheDocument();

  expect(
    await screen.findByRole("heading", {
      name: "Dagpenger",
      level: 3,
    })
  ).toBeInTheDocument();
});

test("Representasjonscontainer blir vist - mockdata har satt bruker som representant for andre ", async () => {
  render(<Landingsside />);

  expect(await screen.findByText("Hvem vil du bruke dokumentarkivet på vegne av?")).toBeInTheDocument();

  expect(await screen.findAllByRole("option")).toHaveLength(3);

  expect(
    await screen.findByRole("option", {
      name: "Amir Amiresen",
    })
  ).toBeInTheDocument();
});

test("Hjelpetekst som viser hvem du bruker dokumentarkivet på vegne av viser riktig bruker", async () => {
  render(<Landingsside />);

  expect(
    await screen.findByRole("heading", {
      name: "Du bruker nå dokumentarkivet på vegne av Sergio Sergiozen",
      level: 2,
    })
  ).toBeInTheDocument();
});
