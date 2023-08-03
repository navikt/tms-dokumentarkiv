export default [
  {
    url: "/mine-saker-api/journalposter/sakstemakode",
    method: "get",
    response: () => {
      return [
        {
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
                  eventuelleGrunnerTilManglendeTilgang: [],
                  variant: "ARKIV",
                },
                {
                  tittel: "Kvitteringsside for dokumentinnsending",
                  dokumentInfoId: "624882105",
                  dokumenttype: "VEDLEGG",
                  brukerHarTilgang: true,
                  eventuelleGrunnerTilManglendeTilgang: [],
                  variant: "ARKIV",
                },
              ],
              harVedlegg: true,
            },
            {
              tittel: "Søknad om å beholde arbeidsavklaringspenger under opphold i utlandet ",
              journalpostId: "598134456",
              journalposttype: "INNGAAENDE",
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
                  tittel: "Kvitteringsside for dokumentinnsending",
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
      ];
    },
  },
];
