import CoinIcon from "../icons/CoinIcon";
import IconButtonWithLabel from "./IconButtonWithLabel";

type Props = {
  coins: string;
  coinStorageCapacity: string;
  coinProduction: string;
};

const CoinProductionDisplay = ({
  coins,
  coinStorageCapacity,
  coinProduction,
}: Props) => {
  return (
    <>
      <IconButtonWithLabel
        icon={<CoinIcon width="35" height="35" />}
        text={"Coins:"}
        className={"font-bold text-lg"}
        sx={{ cursor: "default" }}
      />
      <div className={"flex"}>
        <span className={"font-bold pl-2 w-1/4"}>{coins}</span>
        <span>stored</span>
      </div>
      <div className={"pt-2 flex"}>
        <span className={"font-bold pl-2 w-1/4"}>{coinStorageCapacity}</span>
        <span>storable</span>
      </div>
      <div className={"pt-2 flex"}>
        <span className={"font-bold pl-2 w-1/4"}>{coinProduction}</span>
        <span>produced per hour</span>
      </div>
    </>
  );
};

export default CoinProductionDisplay;
