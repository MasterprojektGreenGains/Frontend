import Box from "@mui/material/Box";
import CoinIcon from "../icons/CoinIcon";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import HouseIcon from "@mui/icons-material/House";
import PeopleIcon from "@mui/icons-material/People";
import IconButtonWithLabel from "./IconButtonWithLabel";
import MuiIconButtonWithLabel from "./MuiIconButtonWithLabel";

type Props = {
  coins: string,
  coinStorageCapacity: string,
  energy: string,
  ecoCredits: string,
  villages: string,
  population: string,
  className?: string
};

const ResourceDisplay = ({ coins, coinStorageCapacity, energy, ecoCredits, villages, population, className}: Props) => {
  return (
    <Box className={className}>
      <IconButtonWithLabel
        icon={<CoinIcon width="20" height="20" />}
        text={`${coins}/${coinStorageCapacity}`}
        sx={{ cursor: "default" }}
      />

      <MuiIconButtonWithLabel
        icon={WbSunnyIcon}
        text={energy}
        sx={{ cursor: "default" }}
      />

      <MuiIconButtonWithLabel
        icon={LocalFloristIcon}
        text={ecoCredits}
        sx={{ cursor: "default" }}
      />

      <MuiIconButtonWithLabel
        icon={HouseIcon}
        text={villages}
        sx={{ cursor: "default" }}
      />

      <MuiIconButtonWithLabel
        icon={PeopleIcon}
        text={population}
        sx={{ cursor: "default" }}
      />
    </Box>
  );
};

export default ResourceDisplay;
