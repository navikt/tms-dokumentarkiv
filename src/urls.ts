import { getEnvironment } from "./api/environment";

const MIN_SIDE_PROXY_URL = {
  local: "http://localhost:3000/tms-min-side-proxy",
  development: "https://www.intern.dev.nav.no/tms-min-side-proxy",
  production: "https://www.nav.no/tms-min-side-proxy",
};

const BASE_URL = {
    local: "http://localhost:3000",
    development: "https://www.intern.dev.nav.no",
    production: "https://www.nav.no",
  };

export const minSideProxyUrl = MIN_SIDE_PROXY_URL[getEnvironment()];
export const authenticationUrl = `${MIN_SIDE_PROXY_URL[getEnvironment()]}/login/status`;
export const baseUrl = BASE_URL[getEnvironment()];