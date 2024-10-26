import * as React from "react";
import { Link } from "react-router-dom";
import DateToggle from "../components/DateToggle";
import EnergyDisplayInKWh from "../components/EnergyDisplayInKWh";
import PowerLineChart from "../components/PowerLineChart";

const Dashboard = () => {
  const [activeToggleDate, setActiveToggleDate] = React.useState<String>("");

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

  return (
    <>
      <Link to="/dashboard">
        <div className="text-3xl">Dashboard</div>
      </Link>

      <DateToggle
        activeToggleDate={activeToggleDate}
        setActiveToggleDate={setActiveToggleDate}
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
    </>
  );
};

export default Dashboard;
