import { getEnvironment } from "./api/environment";

const MINE_SAKER_API_URL = {
  local: "http://localhost:3000/mine-saker-api",
  development: "https://www.intern.dev.nav.no/mine-saker-api",
  production: "https://www.nav.no/mine-saker-api",
};

const BASE_URL = {
    local: "http://localhost:3000",
    development: "https://www.intern.dev.nav.no",
    production: "https://www.nav.no",
  };

export const mineSakerApiUrl = MINE_SAKER_API_URL[getEnvironment()];
export const authenticationUrl = `${MINE_SAKER_API_URL[getEnvironment()]}/login/status`;
export const getSakstemaerUrl = `${MINE_SAKER_API_URL[getEnvironment()]}/sakstemaer`;
export const getJournalposterUrl = `${MINE_SAKER_API_URL[getEnvironment()]}/journalposter`;
export const dokumentUrl = `${MINE_SAKER_API_URL[getEnvironment()]}/dokument`;
export const getFullmaktForhold = `${MINE_SAKER_API_URL[getEnvironment()]}/fullmakt/forhold`;
export const postUserUrl = `${MINE_SAKER_API_URL[getEnvironment()]}/fullmakt/representert`;

export const baseUrl = BASE_URL[getEnvironment()];
export const minSideUrl = `${BASE_URL[getEnvironment()]}/minside`

export const baseUrlWithLanguage = {
  nb: `${baseUrl}/dokumentarkiv`,
  en: `${baseUrl}/dokumentarkiv/en`,
  nn: `${baseUrl}/dokumentarkiv/nn`,
};