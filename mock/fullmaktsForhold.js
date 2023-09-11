export default [
  {
    url: "/mine-saker-api/fullmakt/forhold",
    method: "get",
    response: () => {
      return {
        navn: "Dag Helge Daghelgesen",
        ident: "123456789",
        fullmaktsGivere: [
          { navn: "Sergio Sergiosen", ident: "234567890" },
          { navn: "Amir Amiresen", ident: "345678901" }
        ],
      };
    },
  },
];
