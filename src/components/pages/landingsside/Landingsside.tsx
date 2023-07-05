import { Heading } from "@navikt/ds-react";
import RepresentasjonsContainer from "../../representasjon/RepresentasjonsContainer";
import SakstemaListe from "../../sakstemaliste/SakstemaListe";
import Disclaimer from "../../disclaimer/Disclaimer";

const Landingsside = () => {

  const isRepresentant = true;

  return (
    <>
      <Heading level="2" size="xlarge">Dokumentarkiv</Heading>
      {isRepresentant ? <RepresentasjonsContainer/> : null}
      <SakstemaListe />
      <Disclaimer />
    </>
  );
};

export default Landingsside;
