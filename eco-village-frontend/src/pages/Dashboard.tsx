import * as React from "react";
import { Link } from "react-router-dom";
import DateToggle from "../components/DateToggle";
import EnergyDisplayInKWh from "../components/EnergyDisplayInKWh";
import PowerLineChart from "../components/PowerLineChart";
import DatePicker from "../components/DatePicker";
import { Dayjs } from "dayjs";
import Button from "../components/Button";
import Box from "@mui/material/Box";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import DrawerRight from "../components/DrawerRight";
import { useNavigate } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import MuiIconButtonWithText from "../components/MuiIconButtonWithText";

const Dashboard = () => {
  const [activeToggleDate, setActiveToggleDate] =
    React.useState<string>("lastday");
  const [fromDate, setFromDate] = React.useState<Dayjs | null | undefined>();
  const [toDate, setToDate] = React.useState<Dayjs | null | undefined>();
  const navigate = useNavigate();

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
    navigate("/ecovillage");
  };

  const handleMissionsClick = () => {
    alert("opening Missions");
  };

  const handleStoreClick = () => {
    alert("opening Store");
  };

  const areDatesSet = fromDate !== undefined || toDate !== undefined;

  return (
    <PageContainer>
      <Box className={"flex"}>
        <div className={"w-1/2 flex justify-start"}>
          <Link className={"text-3xl pb-4"} to="/dashboard">
            Dashboard
          </Link>
        </div>
        <div className={"w-1/2 flex justify-end "}>
          <DrawerRight />
        </div>
      </Box>

      <Box className={"flex"}>
        <Box className={"w-2/3"}>
          <div className={"py-4"}>
            <DateToggle
              activeToggleDate={activeToggleDate}
              setActiveToggleDate={setActiveToggleDate}
              disabled={areDatesSet}
            />
          </div>

          <div className={"pt-4"}>
            <div className={"pl-2 text-4xl font-semibold"}>
              <EnergyDisplayInKWh seriesDataInWatts={seriesDataInWatts} />
            </div>

            <PowerLineChart
              xAxisData={xAxisData}
              seriesDataInWatts={seriesDataInWatts}
              height={400}
            />
          </div>
        </Box>

        <Box className={"w-1/3 mt-4 p-2 bg-slate-100"}>
          <div>Widget (Picture) Area</div>
        </Box>
      </Box>

      <Box className={"flex justify-start mt-4"}>
        <div>
          <DatePicker
            label={"From Date"}
            date={fromDate}
            setDate={setFromDate}
          />
        </div>

        <div className={"pl-4"}>
          <DatePicker label={"To Date"} date={toDate} setDate={setToDate} />
        </div>

        <div className={"flex pl-4 justify-start items-center"}>
          <Button
            className={"h-fit w-24"}
            color={"secondary"}
            variant="contained"
            onClick={handleResetClick}
            disabled={!areDatesSet}
          >
            Reset
          </Button>
        </div>
      </Box>

      <Box className={"flex mt-16"}>
        <Box className={"flex w-2/3 bg-red-200"}>
          <Button
            className={"w-full"}
            color={"primary"}
            variant={"contained"}
            size={"large"}
            onClick={handleOpenEcoVillageClick}
          >
            Open EcoVillage
          </Button>
        </Box>

        <Box className={"flex justify-end w-1/3"}>
          <div className={"mr-4"}>
            <Button
              color={"secondary"}
              variant={"contained"}
              size={"large"}
              onClick={handleMissionsClick}
            >
              Missions
            </Button>
          </div>

          <div className={"mr-6"}>
            <Button
              color={"secondary"}
              variant={"contained"}
              size={"large"}
              onClick={handleStoreClick}
            >
              Store
            </Button>
          </div>

          <MuiIconButtonWithText
            icon={LocalFloristIcon}
            text={"60"}
            fontSize="large"
            className="font-semibold text-xl"
            sx={{ cursor: "default" }}
          />
        </Box>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
