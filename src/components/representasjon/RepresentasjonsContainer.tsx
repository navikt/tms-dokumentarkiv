import { Select } from "@navikt/ds-react";
import { ChangeEvent } from "react";
import { postUser } from "../../api/api";
import { TextLanguages, text } from "../../language/text";
import { selectedUserAtom, setSelectedUser } from "../../store/store";
import { Fullmakter } from "../pages/landingsside/Landingsside";
import styles from "./RepresentasjonsContainer.module.css";
import { useStore } from "@nanostores/react";

interface RepresentasjonsContainerProps {
  fullmakter: Fullmakter;
  language: TextLanguages;
  mutate: () => void;
}

const RepresentasjonsContainer = ({ fullmakter, language, mutate }: RepresentasjonsContainerProps) => {
  const handleSelectChange = async (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedUser(event.target.options[event.target.selectedIndex].text, event.target.value);
    await postUser({ ident: event.target.value });
    mutate();
  };

  const selectedUser = useStore(selectedUserAtom);
  const isSelectedUser = selectedUser.ident !== undefined;

  return (
    <div className={styles.container}>
      <Select
        className={styles.select}
        label={text.representasjonLabel[language]}
        description={text.representasjonDescription[language]}
        onChange={handleSelectChange}
      >
        {isSelectedUser && <option value={selectedUser?.ident} selected>{selectedUser?.navn}</option>}
        <option className={styles.option} value={fullmakter.ident}>{fullmakter.navn}</option>
        {fullmakter?.fullmaktsGivere?.map((fullmaktsGiver) => (
          <option value={fullmaktsGiver.ident}>{fullmaktsGiver.navn}</option>
        ))}
      </Select>
    </div>
  );
};

export default RepresentasjonsContainer;
