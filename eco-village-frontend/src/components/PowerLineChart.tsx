import { LineChart } from "@mui/x-charts/LineChart";
import dayjs from "dayjs";

type Props = {
    xAxisData: Date[],
    seriesDataInWatts: number[],
    width?: number,
    height?: number
};

const PowerLineChart = ({xAxisData, seriesDataInWatts, width, height}: Props) => {
  return (
    <>
      <LineChart
        xAxis={[
          {
            data: xAxisData,
            tickInterval: xAxisData,
            scaleType: "time",
            valueFormatter: (date: Date) =>
              dayjs(date).format("MMM D, HH:mm:ss"),
          },
        ]}
        series={[{ label: "W", data: seriesDataInWatts }]}
        width={width}
        height={height}
      />
    </>
  );
};

export default PowerLineChart;
