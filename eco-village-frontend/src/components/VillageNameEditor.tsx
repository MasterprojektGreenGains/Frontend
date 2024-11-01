import { IconButton, TextField } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useState } from "react";

type Props = {
  villageName: string;
  setVillageName: (name: string) => void;
  size?: "small" | "medium"
};

const VillageNameEditor = ({ villageName, setVillageName, size = "small" }: Props) => {
  const [isVillageNameEditable, setIsVillageNameEditable] = useState(false);

  return (
    <>
      <TextField
        value={villageName}
        placeholder="Village Name"
        variant="standard"
        size={size}
        onChange={(event) => setVillageName(event.target.value)}
        slotProps={{ htmlInput: { readOnly: !isVillageNameEditable }}}
      />
      <IconButton
        color={isVillageNameEditable ? "primary" : "secondary"}
        onClick={() => setIsVillageNameEditable(!isVillageNameEditable)}
      >
        <ModeEditIcon fontSize={"small"} />
      </IconButton>
    </>
  );
};

export default VillageNameEditor;
