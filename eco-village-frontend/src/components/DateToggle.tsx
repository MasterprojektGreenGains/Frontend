import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

type Props = {
  activeToggleDate: string;
  setActiveToggleDate: (value: string) => void;
  disabled?: boolean
};

const DateToggle = ({ activeToggleDate, setActiveToggleDate, disabled }: Props) => {
  return (
    <>
      <ToggleButtonGroup
        value={activeToggleDate}
        exclusive
        onChange={(event: React.MouseEvent<HTMLElement>, activeDate: string) => setActiveToggleDate(activeDate)}
        disabled={disabled}
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
