import { useState } from "react";
import PageContainer from "../components/PageContainer";
import ResourceDisplay from "../components/ResourceDisplay";
import { Box, IconButton } from "@mui/material";
import VillageNameEditor from "../components/VillageNameEditor";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import NotificationsIcon from "@mui/icons-material/Notifications";
import VillageView from "../components/VillageView";
import { Field } from "../types/Types";

const EcoVillage = () => {
  const [villageName, setVillageName] = useState("Village 1");
  const [fields, setFields] = useState<Field[]>([
    {
      id: "centerField",
      building: { type: "ecoCommandCenter", level: 1 },
    },
    {
      id: "field 1",
    },
    {
      id: "field 2",
    },
    {
      id: "field 3",
      building: { type: "windTurbine", level: 3}
    },
    {
      id: "field 4",
      building: { type: "windTurbine", level: 4}
    },
    {
      id: "field 5",
    },
    {
      id: "field 6",
    },
    {
      id: "field 7",
      building: { type: "windTurbine", level: 1 },
    },
    {
      id: "field 8",
      building: { type: "windTurbine", level: 2 },
    },
    {
      id: "field 9",
      building: { type: "house", level: 1 },
    },
    {
      id: "field 10",
      building: { type: "house", level: 3 },
    },
    {
      id: "field 11",

    },
    {
      id: "field 12",
    },
    {
      id: "field 13",
    },
    {
      id: "field 14",
    },
    {
      id: "field 15",
    },
    {
      id: "field 16",
    },
  ]);

  return (
    <PageContainer className={"bg-[#f2efdf]"}>
      <ResourceDisplay
        className={"flex justify-between w-1/2"}
        coins={"168"}
        coinStorageCapacity={"4500"}
        energy={"16"}
        ecoCredits={"60"}
        villages={"2"}
        population={"315"}
      />

      <Box className={"flex w-1/2 mt-8 justify-between"}>
        <div>
          <VillageNameEditor
            villageName={villageName}
            setVillageName={setVillageName}
          />
        </div>

        <Box className={"flex"}>
          <div>
            <IconButton
              color={"secondary"}
              onClick={() => alert("opening store")}
            >
              <ShoppingBagIcon />
            </IconButton>
          </div>
          <div>
            <IconButton
              color={"secondary"}
              onClick={() => alert("opening notifications")}
            >
              <NotificationsIcon />
            </IconButton>
          </div>
        </Box>
      </Box>
      <Box className={"flex w-1/2"}>
        <VillageView fields={fields} setFields={setFields} />
      </Box>
    </PageContainer>
  );
};

export default EcoVillage;
