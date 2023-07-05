import { BodyLong, Heading } from "@navikt/ds-react";
import styles from "./Disclaimer.module.css";

const Disclaimer = () => {
  return(
    <div className={styles.container}>
      <Heading level="3" size="small">Finner du ikke det du leter etter?</Heading>
      <ul>
        <li><BodyLong>Har du sendt inn en søknad per post tar det litt tid før saken vises her.</BodyLong></li>
        <li><BodyLong>Dersom du har sendt inn en søknad på vegne av en annen person, vil ikke saken vises her. Vi beklager ulempene dette medfører.</BodyLong></li>
        <li><BodyLong>For bidragssaker kan du kun se dokumenter fra starten av 2022.</BodyLong></li>
        <li><BodyLong>Finner du ikke dokumentet det du leter etter under sykepenger eller sykmelding kan du sjekke Sykefravær. Ta kontakt dersom det er noe du lurer på.</BodyLong></li>
      </ul>
      <BodyLong>Ta kontakt dersom det er noe du lurer på.</BodyLong>
    </div>
  );
};

export default Disclaimer;