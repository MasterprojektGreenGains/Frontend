import { useState } from "react";
import PageContainer from "../components/PageContainer";
import ResourceDisplay from "../components/ResourceDisplay";
import { Box, IconButton } from "@mui/material";
import VillageNameEditor from "../components/VillageNameEditor";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import NotificationsIcon from "@mui/icons-material/Notifications";
import VillageView from "../components/VillageView";
import { Field } from "../types/Types";
import CoinProductionDisplay from "../components/CoinProductionDisplay";
import EnergyProductionDisplay from "../components/EnergyProductionDisplay";
import MissionOverviewDisplay from "../components/MissionOverviewDisplay";
import AchievementOverviewDisplay from "../components/AchievementOverviewDisplay";
import Button from "../components/Button";

const EcoVillage = () => {
  const [villageName, setVillageName] = useState("Village 1");
  const [fields, setFields] = useState<Field[]>([
    { id: "centerField", building: { type: "ecoCommandCenter", level: 1 } },
    { id: "field 1" },
    { id: "field 2" },
    { id: "field 3", building: { type: "house", level: 2 } },
    { id: "field 4", building: { type: "windTurbine", level: 4 } },
    { id: "field 5" },
    { id: "field 6" },
    { id: "field 7", building: { type: "windTurbine", level: 1 } },
    { id: "field 8", building: { type: "windTurbine", level: 2 } },
    { id: "field 9", building: { type: "house", level: 1 } },
    { id: "field 10", building: { type: "house", level: 3 } },
    { id: "field 11" },
    { id: "field 12" },
    { id: "field 13" },
    { id: "field 14" },
    { id: "field 15" },
    { id: "field 16" },
  ]);

  const coins = "168";
  const coinStorageCapacity = "4500";
  const producedEnergy = "24";
  const consumedEnergy = "8";
  const freeEnergy = "16";
  const ecoCredits = "60";
  const villages = "2";
  const population = "315";
  const coinProduction = "36";
  const shortMission = "Eco-Friendly Routine";
  const seasonalMission = "Half Year Hero";
  const eventMission = "Christmas Event";
  const singleEarnedBadges = "14/16 badges earned";
  const rankedBadges = "12/36 ranks earned";
  const skinsAndWidgets = "150 until next reward";
  const claimableCoins = "550 coins claimable";

  return (
    <PageContainer className={"bg-[#f2efdf]"}>
      <Box className={"flex w-full"}>
        <Box className={"w-1/2"}>
          <ResourceDisplay
            className={"flex justify-between"}
            coins={coins}
            coinStorageCapacity={coinStorageCapacity}
            energy={freeEnergy}
            ecoCredits={ecoCredits}
            villages={villages}
            population={population}
          />

          <Box className={"flex mt-8 justify-between"}>
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
          <Box className={"flex"}>
            <VillageView fields={fields} setFields={setFields} />
          </Box>
        </Box>
        <Box className="w-1/2 mt-28 pl-16">
          <Box>
            <Box className={"flex justify-evenly"}>
              <Box className={"w-1/2"}>
                <CoinProductionDisplay
                  coins={coins}
                  coinStorageCapacity={coinStorageCapacity}
                  coinProduction={coinProduction}
                />
              </Box>
              <Box className={"w-1/2"}>
                <EnergyProductionDisplay
                  producedEnergy={producedEnergy}
                  consumedEnergy={consumedEnergy}
                  freeEnergy={freeEnergy}
                />
              </Box>
            </Box>
          </Box>
          <Box className={"mt-16"}>
            <MissionOverviewDisplay
              shortMission={shortMission}
              seasonalMission={seasonalMission}
              eventMission={eventMission}
            />
          </Box>
          <Box className={"mt-16"}>
            <AchievementOverviewDisplay
              singleEarnedBadges={singleEarnedBadges}
              rankedBadges={rankedBadges}
              skinsAndWidgets={skinsAndWidgets}
            />
          </Box>
          <Box className={"pl-2 mt-8"}>
            <Box className={"flex items-center"}>
              <Button
                variant={"contained"}
                size={"small"}
                onClick={() => alert("opening claim coin rewards")}
              >
                Claim Coin Rewards
              </Button>
              <span className={"pl-2"}>{claimableCoins}</span>
            </Box>
          </Box>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default EcoVillage;
