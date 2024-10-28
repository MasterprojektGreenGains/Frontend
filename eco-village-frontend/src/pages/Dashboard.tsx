import * as React from "react";
import { Link } from "react-router-dom";
import DateToggle from "../components/DateToggle";
import EnergyDisplayInKWh from "../components/EnergyDisplayInKWh";
import PowerLineChart from "../components/PowerLineChart";
import DatePicker from "../components/DatePicker";
import { Dayjs } from "dayjs";
import Button from "../components/Button";
import Box from "@mui/material/Box";

const Dashboard = () => {
  const [activeToggleDate, setActiveToggleDate] =
    React.useState<string>("lastday");
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
      <Box className="text-3xl pb-4">
        <Link to="/dashboard">Dashboard</Link>
      </Box>

      <Box className="flex">
        <Box className="w-2/3">
          <div className="py-4">
            <DateToggle
              activeToggleDate={activeToggleDate}
              setActiveToggleDate={setActiveToggleDate}
              disabled={areDatesSet}
            />
          </div>

          <div className="pt-4">
            <div className="pl-2 text-4xl font-semibold">
              <EnergyDisplayInKWh seriesDataInWatts={seriesDataInWatts} />
            </div>

            <PowerLineChart
              xAxisData={xAxisData}
              seriesDataInWatts={seriesDataInWatts}
              height={400}
            />
          </div>
        </Box>

        <Box className="w-1/3 mt-4 p-2 bg-slate-100">
          <div>Widget (Picture) Area</div>
        </Box>
      </Box>

      <Box className="flex justify-start mt-4">
        <div>
          <DatePicker
            label={"From Date"}
            date={fromDate}
            setDate={setFromDate}
          />
        </div>

        <div className="pl-4">
          <DatePicker label={"To Date"} date={toDate} setDate={setToDate} />
        </div>

        <div className="flex pl-4 justify-start items-center">
          <Button
            className="h-fit w-24"
            color={"secondary"}
            variant="contained"
            onClick={handleResetClick}
            disabled={!areDatesSet}
          >
            Reset
          </Button>
        </div>
      </Box>

      <div className="mt-16">
        <Button
          className="w-1/3"
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
