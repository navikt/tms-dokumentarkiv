import { getEnvironment } from "../../api/environment";

const DAGPENGER = {
  local: "https://localhost:3000/arbeid/dagpenger/mine-dagpenger",
  ansatt: "https://arbeid.intern.dev.nav.no/arbeid/dagpenger/mine-dagpenger",
  development: "https://arbeid.intern.dev.nav.no/arbeid/dagpenger/mine-dagpenger",
  production: "https://www.nav.no/arbeid/dagpenger/mine-dagpenger",
};

const FORELDREPENGER = {
  local: "https://foreldrepenger.nav.no/",
  ansatt: "https://foreldrepenger.dev.nav.no/",
  development: "https://foreldrepenger.dev.nav.no/",
  production: "https://foreldrepenger.nav.no/",
};

const HJELPEMIDLER = {
  local: "https://localhost:3000//hjelpemidler/dinehjelpemidler",
  ansatt: "https://hjelpemidler.dev.nav.no/hjelpemidler/dinehjelpemidler",
  development: "https://hjelpemidler.dev.nav.no/hjelpemidler/dinehjelpemidler",
  production: "https://www.nav.no/hjelpemidler/dinehjelpemidler",
};

const SOSIALHJELP = {
  local: "https://localhost:3000/sosialhjelp/innsyn",
  ansatt: "https://www-q1.dev.nav.no/sosialhjelp/innsyn",
  development: "https://www-q1.dev.nav.no/sosialhjelp/innsyn",
  production: "https://www.nav.no/sosialhjelp/innsyn",
};

const PENSJON = {
  local: "https://localhost:3000/dinpensjon",
  ansatt:
    "https://pensjon-selvbetjening-dinpensjon-frontend-borger-q2.intern.dev.nav.no/pensjon/selvbetjening/dinpensjon",
  development:
    "https://pensjon-selvbetjening-dinpensjon-frontend-borger-q2.intern.dev.nav.no/pensjon/selvbetjening/dinpensjon",
  production: "https://www.nav.no/pensjon/selvbetjening/dinpensjon",
};

const UFORETRYGD = {
  local: "https://localhost:3000/uforetrygd",
  ansatt: "https://pensjon-pselv-q1.dev.nav.no/pselv/publisering/uforetrygd.jsf?execution=e2s1",
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
export const sykefravaerUrl = "https://www.nav.no/syk/sykefravaer";
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
  OMS: omsorgspengerUrl,
};
