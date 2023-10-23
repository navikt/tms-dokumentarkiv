import { rest } from "msw";
import { authenticationUrl, getFullmaktForhold, getFullmaktInfoUrl, getJournalposterUrl, getSakstemaerUrl, mineSakerApiUrl } from "../urls";

const journalpostHandler = () => {
  return [
    rest.get(getJournalposterUrl, (_, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            navn: "Arbeidsavklaringspenger",
            kode: "AAP",
            journalposter: [
              {
                tittel: "Søknad om å beholde arbeidsavklaringspenger under opphold i innlandet ",
                journalpostId: "598134457",
                journalposttype: "INNGAAENDE",
                avsender: {
                  innloggetBrukerErSelvKilden: true,
                  type: "PERSON",
                },
                mottaker: null,
                sisteEndret: "2023-04-13T14:36:13Z",
                dokumenter: [
                  {
                    tittel: "Søknad om å beholde arbeidsavklaringspenger under opphold i innlandet ",
                    dokumentInfoId: "624882104",
                    dokumenttype: "HOVED",
                    brukerHarTilgang: false,
                    eventuelleGrunnerTilManglendeTilgang: ["skannet_dokument"],
                    variant: "ARKIV",
                  },
                  {
                    tittel: "Kvitteringsside for dokumentinnsending",
                    dokumentInfoId: "624882105",
                    dokumenttype: "VEDLEGG",
                    brukerHarTilgang: false,
                    eventuelleGrunnerTilManglendeTilgang: [],
                    variant: "ARKIV",
                  },
                ],
                harVedlegg: true,
              },
              {
                tittel: "Søknad om å beholde arbeidsavklaringspenger under opphold i utlandet ",
                journalpostId: "598134456",
                journalposttype: "UTGAAENDE",
                avsender: {
                  innloggetBrukerErSelvKilden: true,
                  type: "PERSON",
                },
                mottaker: null,
                sisteEndret: "2023-04-13T14:35:07Z",
                dokumenter: [
                  {
                    tittel: "Søknad om å beholde arbeidsavklaringspenger under opphold i utlandet ",
                    dokumentInfoId: "624882102",
                    dokumenttype: "HOVED",
                    brukerHarTilgang: true,
                    eventuelleGrunnerTilManglendeTilgang: [],
                    variant: "ARKIV",
                  },
                  {
                    tittel: "Kvitteringsside for dokumentinnsending",
                    dokumentInfoId: "624882103",
                    dokumenttype: "VEDLEGG",
                    brukerHarTilgang: true,
                    eventuelleGrunnerTilManglendeTilgang: [],
                    variant: "ARKIV",
                  },
                ],
                harVedlegg: true,
              },
              {
                tittel: "Søknad om reisestønad (AAP)",
                journalpostId: "598120912",
                journalposttype: "INNGAAENDE",
                avsender: {
                  innloggetBrukerErSelvKilden: true,
                  type: "PERSON",
                },
                mottaker: null,
                sisteEndret: "2023-02-10T10:27:01Z",
                dokumenter: [
                  {
                    tittel: "Søknad om reisestønad (AAP)",
                    dokumentInfoId: "624868436",
                    dokumenttype: "HOVED",
                    brukerHarTilgang: true,
                    eventuelleGrunnerTilManglendeTilgang: [],
                    variant: "ARKIV",
                  },
                  {
                    tittel: "Legeerklæring",
                    dokumentInfoId: "624868437",
                    dokumenttype: "VEDLEGG",
                    brukerHarTilgang: true,
                    eventuelleGrunnerTilManglendeTilgang: [],
                    variant: "ARKIV",
                  },
                  {
                    tittel: "Kvitteringsside for dokumenttest",
                    dokumentInfoId: "624868438",
                    dokumenttype: "VEDLEGG",
                    brukerHarTilgang: true,
                    eventuelleGrunnerTilManglendeTilgang: [],
                    variant: "ARKIV",
                  },
                ],
                harVedlegg: true,
              },
            ],
          },
        ])
      );
    }),
  ];
};

const authenticationHandler = () => {
  return [
    rest.get(authenticationUrl, (_, res, ctx) => {
      return res(ctx.status(200), ctx.json({ authenticated: true, level: 4, levelOfAssurance: "High" }));
    }),
  ];
};

const sakstemaHandler = () => {
  return [
    rest.get(getSakstemaerUrl, (_, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            navn: "Arbeidsavklaringspenger",
            kode: "AAP",
            sistEndret: "2023-04-13T14:36:13Z",
            detaljvisningUrl: "https://www.intern.dev.nav.no/mine-saker/tema/AAP",
          },
          {
            navn: "Tilleggsstønad",
            kode: "TSO",
            sistEndret: "2023-02-22T11:40:08Z",
            detaljvisningUrl: "https://www.intern.dev.nav.no/mine-saker/tema/TSO",
          },
          {
            navn: "Dagpenger",
            kode: "DAG",
            sistEndret: "2023-02-21T13:36:27Z",
            detaljvisningUrl: "https://www.intern.dev.nav.no/mine-saker/tema/DAG",
          },
          {
            navn: "Oppfølging",
            kode: "OPP",
            sistEndret: "2023-01-16T10:57:06Z",
            detaljvisningUrl: "https://www.intern.dev.nav.no/mine-saker/tema/OPP",
          },
        ])
      );
    }),
  ];
};

const fullmaktsForholdHandler = () => {
  return [
    rest.get(getFullmaktForhold, (_, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          navn: "Dag Helge Daghelgesen",
          ident: "123456789",
          fullmaktsGivere: [
            { navn: "Sergio Sergiozen", ident: "12345" },
            { navn: "Amir Amiresen", ident: "345678901" },
          ],
        })
      );
    }),
  ];
};

const fullmaktsInfoHandler = () => {
  return [
    rest.get(getFullmaktInfoUrl, (_, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          viserRepresentertesData: true,
          representertNavn: "Sergio Sergiozen",
          representertIdent: "12345",
        })
      );
    }),
  ];
};

const enkeltDokumentHandler = () => {
  return [
    rest.get(mineSakerApiUrl, (_, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          navn: "Arbeidsavklaringspenger",
          kode: "AAP",
          journalposter: [
            {
              tittel: "Søknad om å beholde arbeidsavklaringspenger under opphold i utlandet ",
              journalpostId: "598134457",
              journalposttype: "INNGAAENDE",
              avsender: {
                innloggetBrukerErSelvKilden: true,
                type: "PERSON",
              },
              mottaker: null,
              sisteEndret: "2023-04-13T14:36:13Z",
              dokumenter: [
                {
                  tittel: "Søknad om å beholde arbeidsavklaringspenger under opphold i utlandet ",
                  dokumentInfoId: "624882104",
                  dokumenttype: "HOVED",
                  brukerHarTilgang: false,
                  eventuelleGrunnerTilManglendeTilgang: ["skannet_dokument"],
                  variant: "ARKIV",
                },
                {
                  tittel: "Kvitteringsside for dokumentinnsending",
                  dokumentInfoId: "624882105",
                  dokumenttype: "VEDLEGG",
                  brukerHarTilgang: false,
                  eventuelleGrunnerTilManglendeTilgang: [],
                  variant: "ARKIV",
                },
              ],
              harVedlegg: true,
            },
          ],
        })
      );
    }),
  ];
};

export const handlers = [
  ...journalpostHandler(),
  ...authenticationHandler(),
  ...sakstemaHandler(),
  ...fullmaktsForholdHandler(),
  ...fullmaktsInfoHandler(),
  ...enkeltDokumentHandler()
];
