import Box from "@mui/material/Box";
import CoinIcon from "../icons/CoinIcon";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import HouseIcon from "@mui/icons-material/House";
import PeopleIcon from "@mui/icons-material/People";
import IconButtonWithText from "./IconButtonWithText";
import MuiIconButtonWithText from "./MuiIconButtonWithText";

type Props = {
  coins: string,
  energy: string,
  ecoCredits: string,
  villages: string,
  population: string,


  coinStorageCapacity: string;
};

const ResourceDisplay = ({ coins, coinStorageCapacity, energy, ecoCredits, villages, population }: Props) => {
  return (
    <Box className="flex justify-around w-1/2">
      <IconButtonWithText
        icon={<CoinIcon width="20" height="20" />}
        text={`${coins}/${coinStorageCapacity}`}
        sx={{ cursor: "default" }}
      />

      <MuiIconButtonWithText
        icon={WbSunnyIcon}
        text={energy}
        sx={{ cursor: "default" }}
      />

      <MuiIconButtonWithText
        icon={LocalFloristIcon}
        text={ecoCredits}
        sx={{ cursor: "default" }}
      />

      <MuiIconButtonWithText
        icon={HouseIcon}
        text={villages}
        sx={{ cursor: "default" }}
      />

      <MuiIconButtonWithText
        icon={PeopleIcon}
        text={population}
        sx={{ cursor: "default" }}
      />
    </Box>
  );
};

export default ResourceDisplay;
