export default [
  {
    url: "/mine-saker-api/login/status",
    method: "get",
    response: () => {
      return { authenticated: true, level: 4, levelOfAssurance: "High" };
    },
  },
];
