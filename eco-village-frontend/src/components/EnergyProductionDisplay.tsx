import MuiIconButtonWithLabel from "./MuiIconButtonWithLabel";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

type Props = {
  producedEnergy: string;
  consumedEnergy: string;
  freeEnergy: string;
};

const EnergyProductionDisplay = ({
  producedEnergy,
  consumedEnergy,
  freeEnergy,
}: Props) => {
  return (
    <>
      <MuiIconButtonWithLabel
        icon={WbSunnyIcon}
        text={"Energy:"}
        fontSize="large"
        className={"font-bold text-lg"}
        sx={{ cursor: "default" }}
        disableRipple
      />
      <div className={"flex"}>
        <span className={"font-bold pl-4 w-1/4"}>{producedEnergy}</span>
        <span>produced per hour</span>
      </div>
      <div className={"pt-2 flex"}>
        <span className={"font-bold pl-4 w-1/4"}>{consumedEnergy}</span>
        <span>consumed per hour</span>
      </div>
      <hr className={"border-black border-t-2 ml-3 mr-28 mt-2"} />
      <div className={"pt-1 flex"}>
        <span className={"font-bold pl-4 w-1/4"}>{freeEnergy}</span>
        <span>produced per hour</span>
      </div>
    </>
  );
};

export default EnergyProductionDisplay;
