export default [
  {
    url: "/mine-saker-api/fullmakt/info",
    method: "get",
    response: () => {
      return {
        viserRepresentertesData: true,
        representertNavn: "Sergio Sergiozen",
        representertIdent: "12345"
      };
    },
  },
];