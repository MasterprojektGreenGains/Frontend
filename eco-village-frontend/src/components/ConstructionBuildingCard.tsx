import { Box } from "@mui/material";
import IconButtonWithLabel from "./IconButtonWithLabel";
import MuiIconButtonWithLabel from "./MuiIconButtonWithLabel";
import CoinIcon from "../icons/CoinIcon";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import Button from "./Button";
import { Cost } from "../types/Types";

type Props = {
  handleClose: () => void;
  name: string;
  description: string;
  cost: Cost;
  imageUrl: string;
  builtCount: number;
  maxBuilt: number;
  onConstruct: (buildingToConstruct: string) => void;
};

const ConstructionBuildingCard = ({
  handleClose,
  name,
  description,
  imageUrl,
  cost,
  builtCount,
  maxBuilt,
  onConstruct,
}: Props) => (
  <>
    <Box className="flex">
      <Box className="w-3/4 p-2">
        <p className="font-bold mb-2">{name}</p>
        <p>{description}</p>
        <p className="font-bold mt-6">Costs:</p>
        <div className="flex gap-4">
          {cost.coins && (
            <IconButtonWithLabel
              icon={<CoinIcon width="20" height="20" />}
              text={cost.coins}
              sx={{ cursor: "default" }}
            />
          )}
          {cost.energy && (
            <MuiIconButtonWithLabel
              icon={WbSunnyIcon}
              text={cost.energy}
              sx={{ cursor: "default" }}
              disableRipple
            />
          )}
          {cost.ecoCredits && (
            <MuiIconButtonWithLabel
              icon={LocalFloristIcon}
              text={cost.ecoCredits}
              sx={{ cursor: "default" }}
              disableRipple
            />
          )}
        </div>
        <div className="mt-4">
          <Button variant="contained" size="small" onClick={() => onConstruct(name)}>
            Construct Building
          </Button>
        </div>
      </Box>
      <Box className="flex items-center w-1/4 pl-4">
        <div className={"flex flex-col align-middle"}>
          <img src={imageUrl} alt={name} width={60} />
          <p className="pt-4">
            {builtCount}/{maxBuilt} built
          </p>
        </div>
      </Box>
    </Box>
    <hr className="border-black border-t-1 mt-8 mb-8" />
  </>
);

export default ConstructionBuildingCard;
