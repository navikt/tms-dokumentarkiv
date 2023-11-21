const isProduction = window.location.href.includes("www.nav.no") || window.location.href.includes("person.nav.no");
const isDevelopment = window.location.href.includes("www.intern.dev.nav.no");

export const getEnvironment = () => {
  if (isProduction) {
    return "production";
  }

  if (isDevelopment) {
    console.log("dev");
    return "development";
  }
  console.log("local");
  return "local";
};
