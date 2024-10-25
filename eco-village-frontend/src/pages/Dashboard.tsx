import * as React from "react";
import { Link } from "react-router-dom";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { LineChart } from "@mui/x-charts/LineChart";
import dayjs from "dayjs";

const Dashboard = () => {
  const [activeToggleDate, setActiveToggleDate] = React.useState<
    string | null
  >();

  const xAxisData = [
    new Date("2023-12-04T08:00:00"),
    new Date("2023-12-05T09:00:00"),
    new Date("2023-12-06T10:00:00"),
    new Date("2023-12-07T11:00:00"),
    new Date("2023-12-08T12:00:00"),
    new Date("2023-12-09T13:00:00"),
    new Date("2023-12-10T14:00:00"),
  ];
  const seriesData = [2000, 2100, 2500, 2800, 3200, 2500, 1800]; // Watts

  function calculateEnergy(seriesData: number[]) {
    const intervalInHours = 5 / 3600; // 5 seconds in hours
    let totalEnergy = 0;

    for (let power of seriesData) {
      const powerInKW = power / 1000; // Convert watts to kilowatts
      totalEnergy += powerInKW * intervalInHours; // Energy in kWh for this reading
    }

    return totalEnergy; // Total energy in kWh
  }

  const handleToggleDate = (
    event: React.MouseEvent<HTMLElement>,
    activeDate: string | null
  ) => {
    setActiveToggleDate(activeDate);
  };

  return (
    <>
      <Link to="/dashboard">
        <div className="text-3xl">Dashboard</div>
      </Link>
      <ToggleButtonGroup
        value={activeToggleDate}
        exclusive
        onChange={handleToggleDate}
        aria-label="text alignment"
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

      <div className="text-2xl font-semibold">{calculateEnergy(seriesData).toFixed(2)} kWh</div>

      <LineChart
        xAxis={[
          {
            label: "Date and Time",
            data: xAxisData,
            tickInterval: xAxisData,
            scaleType: "time",
            valueFormatter: (date: Date) =>
              dayjs(date).format("MMM D, HH:mm:ss"),
          },
        ]}
        series={[{ label: "W", data: seriesData }]}
        width={1000}
        height={300}
      />
    </>
  );
};

export default Dashboard;
