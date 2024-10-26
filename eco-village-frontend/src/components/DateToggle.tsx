import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

type Props = {
  activeToggleDate: String;
  setActiveToggleDate: (value: String) => void;
};

const DateToggle = ({ activeToggleDate, setActiveToggleDate }: Props) => {
  const handleToggleDate = (
    event: React.MouseEvent<HTMLElement>,
    activeDate: String
  ) => {
    setActiveToggleDate(activeDate);
  };

  return (
    <>
      <ToggleButtonGroup
        value={activeToggleDate}
        exclusive
        onChange={handleToggleDate}
        aria-label="time selection"
      >
        <ToggleButton value="lastday" aria-label="last day">
          Last Day
        </ToggleButton>
        <ToggleButton value="lastweek" aria-label="last week">
          Last Week
        </ToggleButton>
        <ToggleButton value="lastmonth" aria-label="last month">
          Last Month
        </ToggleButton>
        <ToggleButton value="lastyear" aria-label="last year">
          Last Year
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

export default DateToggle;
