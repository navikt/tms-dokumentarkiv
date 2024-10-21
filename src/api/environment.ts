export const isProduction =
  window.location.href.includes("www.nav.no") || window.location.href.includes("person.nav.no");
const isDevelopment = window.location.href.includes("www.intern.dev.nav.no");
const isAnsatt = window.location.href.includes("www.ansatt.dev.nav.no");

export const getEnvironment = () => {
  if (isProduction) {
    return "production";
  }

  if (isAnsatt) {
    return "ansatt";
  }

  if (isDevelopment) {
    return "development";
  }

  return "local";
};
