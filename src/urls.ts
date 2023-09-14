import { getEnvironment } from "./api/environment";

const MINE_SAKER_API_URL = {
  local: "http://localhost:3000/mine-saker-api",
  development: "https://www.intern.dev.nav.no/mine-saker-api",
  production: "https://person.nav.no/mine-saker-api",
};

const BASE_URL = {
    local: "http://localhost:3000",
    development: "https://www.intern.dev.nav.no",
    production: "https://www.nav.no",
};

const BASE_URL_INTERN = {
  local: "http://localhost:3000",
  development: "https://www.intern.dev.nav.no",
  production: "https://www.intern.nav.no",
};

const DIGISOS_REDIRECT_URL = {
  local: "http://localhost:3000/sosialhjelp/innsyn",
  development: "https://www-q0.dev.nav.no/sosialhjelp/innsyn/",
  production: "https://www.nav.no/sosialhjelp/innsyn/",
};



export const mineSakerApiUrl = MINE_SAKER_API_URL[getEnvironment()];
export const authenticationUrl = `${MINE_SAKER_API_URL[getEnvironment()]}/login/status`;
export const getSakstemaerUrl = `${MINE_SAKER_API_URL[getEnvironment()]}/sakstemaer`;
export const getJournalposterUrl = `${MINE_SAKER_API_URL[getEnvironment()]}/journalposter`;
export const dokumentUrl = `${MINE_SAKER_API_URL[getEnvironment()]}/dokument`;
export const getFullmaktForhold = `${MINE_SAKER_API_URL[getEnvironment()]}/fullmakt/forhold`;
export const postUserUrl = `${MINE_SAKER_API_URL[getEnvironment()]}/fullmakt/representert`;
export const getFullmaktInfoUrl = `${MINE_SAKER_API_URL[getEnvironment()]}/fullmakt/info`;

export const baseUrl = BASE_URL[getEnvironment()];
export const internBaseUrl = BASE_URL_INTERN[getEnvironment()];
export const minSideUrl = `${BASE_URL[getEnvironment()]}/minside`
export const dokumentArkivUrl = `${BASE_URL[getEnvironment()]}/dokumentarkiv`
export const kontaktOssUrl = `${BASE_URL[getEnvironment()]}/kontaktoss`
export const pdlFullmaktUrl = `${BASE_URL[getEnvironment()]}/person/pdl-fullmakt-ui/`
export const saksbehandlingstiderUrl = "https://www.nav.no/no/nav-og-samfunn/om-nav/saksbehandlingstider-i-nav";
export const tilbakemeldingerUrl = "https://www.nav.no/person/kontakt-oss/tilbakemeldinger";
export const digisosRedirectUrl = DIGISOS_REDIRECT_URL[getEnvironment()];

export const baseUrlWithLanguage = {
  nb: `${baseUrl}/dokumentarkiv`,
  en: `${baseUrl}/dokumentarkiv/en`,
  nn: `${baseUrl}/dokumentarkiv/nn`,
};