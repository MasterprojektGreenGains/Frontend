import { Box, Icon } from "@mui/material";
import MuiIconButtonWithLabel from "./MuiIconButtonWithLabel";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PeopleIcon from "@mui/icons-material/People";

type Props = {
  singleEarnedBadges: string;
  rankedBadges: string;
  skinsAndWidgets: string;
};

const AchievementOverviewDisplay = ({
  singleEarnedBadges,
  rankedBadges,
  skinsAndWidgets,
}: Props) => {
  return (
    <>
      <MuiIconButtonWithLabel
        icon={EmojiEventsIcon}
        text={"Achievements:"}
        fontSize="large"
        className={"font-bold text-lg"}
        color="secondary"
        onClick={() => alert("opening achievements")}
        sx={{ cursor: "default" }}
      />
      <div className={"flex"}>
        <span className={"pl-2 w-1/3"}>Single-Earned Badges:</span>
        <span className={"font-bold"}>{singleEarnedBadges}</span>
      </div>

      <div className={"pt-4 flex"}>
        <span className={"pl-2 w-1/3"}>Ranked Badges:</span>
        <span className={"font-bold"}>{rankedBadges}</span>
      </div>

      <div className={"pt-4 flex"}>
        <span className={"pl-2 w-1/3"}>Skins & Widgets:</span>
        <Box className={"-ml-2 flex items-center"}>
          <span>
            <MuiIconButtonWithLabel
              icon={PeopleIcon}
              fontSize="small"
              text={""}
              disableRipple
              sx={{ cursor: "default" }}
            />
          </span>
          <span className={"font-bold"}>{skinsAndWidgets}</span>
        </Box>
      </div>
    </>
  );
};

export default AchievementOverviewDisplay;
