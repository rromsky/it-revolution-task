import { ResponsiveLine } from "@nivo/line";

const LineChart = ({ isDashboard = false, data = [], max = 1 }) => {
  const props = {
    data,
    theme: {
      axis: {
        domain: {
          line: {
            stroke: "#777777",
          },
        },
        legend: {
          text: {
            fill: "#777777",
          },
        },
        ticks: {
          line: {
            stroke: "#777777",
            strokeWidth: 1,
          },
          text: {
            fill: "#777777",
          },
        },
      },
      legends: {
        text: {
          fill: "#777777",
        },
      },
      tooltip: {
        container: {
          color: "#aaa",
        },
      },
    },
    colors: isDashboard ? { datum: "color" } : { scheme: "nivo" },
    margin: { top: 50, right: 110, bottom: 50, left: 60 },
    xScale: { type: "point" },
    yScale: {
      type: "linear",
      min: 0,
      max: max,
      stacked: false,
      reverse: false,
    },
    yFormat: " >-.2f",
    curve: "catmullRom",
    axisTop: null,
    axisRight: null,
    axisBottom: {
      orient: "bottom",
      tickSize: 0,
      tickPadding: 5,
      tickRotation: 0,
      legend: isDashboard ? undefined : "transportation", // added
      legendOffset: 36,
      legendPosition: "middle",
      truncateTickAt: 0,
    },
    axisLeft: {
      orient: "left",
      tickValues: 5, // added
      tickSize: 3,
      tickPadding: 5,
      tickRotation: 0,
      legend: isDashboard ? undefined : "count", // added
      legendOffset: -40,
      legendPosition: "middle",
    },
    enableGridX: false,
    enableGridY: false,
    pointSize: 8,
    enableTouchCrosshair: true,
    pointColor: { theme: "background" },
    pointBorderWidth: 2,
    pointBorderColor: { from: "serieColor" },
    pointLabelYOffset: -12,
    useMesh: true,
    legends: [
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ],
  };

  //return <ResponsiveLine style={{ zIndex: 999 }} {...props} />;
  return (
    <ResponsiveLine
      animate
      curve="monotoneX"
      data={data}
      defs={[
        {
          colors: [
            {
              color: "inherit",
              offset: 0,
            },
            {
              color: "inherit",
              offset: 100,
              opacity: 0,
            },
          ],
          id: "gradientA",
          type: "linearGradient",
        },
      ]}
      enableArea
      enableSlices="x"
      enableTouchCrosshair
      fill={[
        {
          id: "gradientA",
          match: "*",
        },
      ]}
      height={400}
      margin={{
        bottom: 60,
        left: 80,
        right: 20,
        top: 60,
      }}
      width={500}
      yScale={{
        stacked: true,
        type: "linear",
      }}
    />
  );
};

export default LineChart;
