import { getEnvironment } from "../../api/environment";

const DAGPENGER = {
  local: "https://localhost:3000/arbeid/dagpenger/mine-dagpenger",
  development: "https://arbeid.intern.dev.nav.no/arbeid/dagpenger/mine-dagpenger",
  production: "https://www.nav.no/arbeid/dagpenger/mine-dagpenger",
};

const FORELDREPENGER = {
  local: "https://foreldrepenger.nav.no/",
  development: "https://foreldrepenger.dev.nav.no/",
  production: "https://foreldrepenger.nav.no/",
};

const HJELPEMIDLER = {
  local: "https://localhost:3000//hjelpemidler/dinehjelpemidler",
  development: "https://hjelpemidler.dev.nav.no/hjelpemidler/dinehjelpemidler",
  production: "https://www.nav.no/hjelpemidler/dinehjelpemidler",
};

const SOSIALHJELP = {
  local: "https://localhost:3000/sosialhjelp/innsyn",
  development: "https://www-q1.dev.nav.no/sosialhjelp/innsyn",
  production: "https://www.nav.no/sosialhjelp/innsyn",
};

const PENSJON = {
  local: "https://localhost:3000/dinpensjon",
  development: "https://pensjon-pselv-q1.dev.nav.no/pselv/publisering/dinpensjon.jsf?execution=e1s1",
  production: "https://www.nav.no/pselv/publisering/dinpensjon.jsf?execution=e1s1",
};

const UFORETRYGD = {
  local: "https://localhost:3000/uforetrygd",
  development: "https://pensjon-pselv-q1.dev.nav.no/pselv/publisering/uforetrygd.jsf?execution=e2s1",
  production: "https://www.nav.no/pselv/publisering/uforetrygd.jsf?execution=e2s1",
};

export const dagpengerUrl = DAGPENGER[getEnvironment()];
export const hjelpemidlerUrl = HJELPEMIDLER[getEnvironment()];
export const foreldrepengerUrl = FORELDREPENGER[getEnvironment()];
export const sosialhjelpUrl = SOSIALHJELP[getEnvironment()];
export const pensjonsUrl = PENSJON[getEnvironment()];
export const uforetrygdUrl = UFORETRYGD[getEnvironment()];
export const arbeidsavklaringspengerUrl = "https://www.nav.no/aap/mine-aap/";
export const sykefravaerUrl = "https://www.nav.no/syk/sykefravaer"
export const omsorgspengerUrl = "https://www.nav.no/familie/sykdom-i-familien/soknad/innsyn";

export const lenker = {
  DAG: dagpengerUrl,
  HJE: hjelpemidlerUrl,
  FOR: foreldrepengerUrl,
  KOM: sosialhjelpUrl,
  AAP: arbeidsavklaringspengerUrl,
  SYK: sykefravaerUrl,
  SYM: sykefravaerUrl,
  PEN: pensjonsUrl,
  UFO: uforetrygdUrl,
  OMS: omsorgspengerUrl
};