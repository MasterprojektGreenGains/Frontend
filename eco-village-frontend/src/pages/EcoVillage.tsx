import { useState } from "react";
import PageContainer from "../components/PageContainer";
import ResourceDisplay from "../components/ResourceDisplay";
import { Box, IconButton } from "@mui/material";
import VillageNameEditor from "../components/VillageNameEditor";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import NotificationsIcon from "@mui/icons-material/Notifications";
import VillageView from "../components/VillageView";

const EcoVillage = () => {
  const [villageName, setVillageName] = useState("Village 1");

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
        <VillageView />
      </Box>
    </PageContainer>
  );
};

export default EcoVillage;
