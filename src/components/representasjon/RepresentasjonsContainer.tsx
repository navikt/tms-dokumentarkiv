import { Select } from "@navikt/ds-react";
import styles from "./RepresentasjonsContainer.module.css";

const RepresentasjonsContainer = () => {
  return (
    <div className={styles.container}>
      <Select className={styles.select} label="Hvem vil du bruke dokumentarkivet på vegne av?" description="Velg mellom dine representerte for å se dokumentarkivet deres.">
        <option value="sergio">Sergio Sergiosen</option>
        <option value="dh">Dag Helge Daghelgesen</option>
        <option value="eivinn">Amir Amiresen</option>
      </Select>
    </div>
  );
};

export default RepresentasjonsContainer;