import TaskAltIcon from "@mui/icons-material/TaskAlt";
import MuiIconButtonWithLabel from "./MuiIconButtonWithLabel";
import Button from "./Button";

type Props = {
  shortMission?: string;
  longMission?: string;
  seasonalMission?: string;
  eventMission?: string;
};

const MissionOverviewDisplay = ({
  shortMission,
  longMission,
  seasonalMission,
  eventMission,
}: Props) => {
  return (
    <>
      <MuiIconButtonWithLabel
        icon={TaskAltIcon}
        text={"Missions:"}
        fontSize="large"
        className={"font-bold text-lg"}
        color="secondary"
        onClick={() => alert("opening missions")}
        sx={{ cursor: "default" }}
      />

      <div className={"flex"}>
        <span className={"pl-2 w-1/4"}>Short Mission:</span>
        {shortMission ? (
          <span className={"font-bold"}>{shortMission}</span>
        ) : (
          <Button
            variant={"contained"}
            size={"small"}
            onClick={() => alert("opening short missions")}
          >
            Select
          </Button>
        )}
      </div>

      <div className={"pt-4 flex"}>
        <span className={"pl-2 w-1/4"}>Long Mission:</span>
        {longMission ? (
          <span className={"font-bold"}>{longMission}</span>
        ) : (
          <Button
            variant={"contained"}
            size={"small"}
            onClick={() => alert("opening long missions")}
          >
            Select
          </Button>
        )}
      </div>

      <div className={"pt-4 flex"}>
        <span className={"pl-2 w-1/4"}>Seasonal Mission:</span>
        {seasonalMission ? (
          <span className={"font-bold"}>{seasonalMission}</span>
        ) : (
          <Button
            variant={"contained"}
            size={"small"}
            onClick={() => alert("opening seasonal missions")}
          >
            Select
          </Button>
        )}
      </div>

      <div className={"pt-4 flex"}>
        <span className={"pl-2 w-1/4"}>Event Mission:</span>
        {eventMission ? (
          <span className={"font-bold"}>{eventMission}</span>
        ) : (
          <Button
            variant={"contained"}
            size={"small"}
            onClick={() => alert("opening event missions")}
          >
            Select
          </Button>
        )}
      </div>
    </>
  );
};

export default MissionOverviewDisplay;
