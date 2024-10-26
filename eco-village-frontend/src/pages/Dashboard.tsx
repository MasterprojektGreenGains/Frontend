import * as React from "react";
import { Link } from "react-router-dom";
import DateToggle from "../components/DateToggle";
import EnergyDisplayInKWh from "../components/EnergyDisplayInKWh";
import PowerLineChart from "../components/PowerLineChart";
import DatePicker from "../components/DatePicker";
import { Dayjs } from "dayjs";
import Button from "../components/Button";

const Dashboard = () => {
  const [activeToggleDate, setActiveToggleDate] =
    React.useState<String>("lastday");
  const [fromDate, setFromDate] = React.useState<Dayjs | null | undefined>();
  const [toDate, setToDate] = React.useState<Dayjs | null | undefined>();

  const xAxisData: Date[] = [
    new Date("2023-12-04T08:00:00"),
    new Date("2023-12-05T09:00:00"),
    new Date("2023-12-06T10:00:00"),
    new Date("2023-12-07T11:00:00"),
    new Date("2023-12-08T12:00:00"),
    new Date("2023-12-09T13:00:00"),
    new Date("2023-12-10T14:00:00"),
  ];

  const seriesDataInWatts: number[] = [
    2000, 2100, 2500, 2800, 3200, 2500, 1800,
  ];

  const handleResetClick = () => {
    setFromDate(undefined);
    setToDate(undefined);
  };

  const handleOpenEcoVillageClick = () => {
    alert("opening EcoVillage");
  };

  const areDatesSet = fromDate !== undefined || toDate !== undefined;

  return (
    <>
      <Link to="/dashboard">
        <div className="text-3xl">Dashboard</div>
      </Link>

      <DateToggle
        activeToggleDate={activeToggleDate}
        setActiveToggleDate={setActiveToggleDate}
        disabled={areDatesSet}
      />

      <div className="text-3xl font-semibold">
        <EnergyDisplayInKWh seriesDataInWatts={seriesDataInWatts} />
      </div>

      <PowerLineChart
        xAxisData={xAxisData}
        seriesDataInWatts={seriesDataInWatts}
        width={1000}
        height={300}
      />

      <DatePicker label={"From Date"} date={fromDate} setDate={setFromDate} />
      <DatePicker label={"To Date"} date={toDate} setDate={setToDate} />

      <Button
        onClick={handleResetClick}
        color={"secondary"}
        variant="contained"
        disabled={!areDatesSet}
      >
        Reset
      </Button>

      <div>
        <Button
          color={"primary"}
          variant={"contained"}
          size={"large"}
          onClick={handleOpenEcoVillageClick}
        >
          Open EcoVillage
        </Button>
      </div>
    </>
  );
};

export default Dashboard;
