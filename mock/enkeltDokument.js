export default [
  {
    url: "/mine-saker-api/enkeltpost",
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
        },
      ];
    },
  },
];