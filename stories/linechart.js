//@flow
import React from "react";
import { storiesOf } from "@storybook/react";
import LineChart from "../src/lib/components/linechart/LineChart.component";
import { data, data_graph_with_axis, forecast_data } from "./data/linechart";
import { Wrapper, Title } from "./common";

const xAxis = {
  field: "time",
  type: "temporal",
  timeUnit: "yearmonthdatehoursminutes",
  title: "time"
};

const yAxis = [
  {
    field: "total_space",
    type: "quantitative",
    title: "TOTAL SPACE (GB)",
    color: "yellow"
  },
  {
    field: "used_space",
    type: "quantitative",
    title: "USED SPACE (GB)",
    color: "blue"
  }
];

// the line chart without x axis and y axis
const xAxis_without_axis = {
  field: "time",
  type: "temporal",
  timeUnit: "yearmonthdatehoursminutes",
  title: "time",
  axis: null
};
const yAxis_without_axis = [
  {
    field: "Latency",
    type: "quantitative",
    color: "#18DFAD",
    axis: { title: null, ticks: false, labels: false }
  },
  {
    field: "Latency",
    type: "quantitative",
    color: "#968BFF",
    axis: { title: null, ticks: false, labels: false }
  },
  {
    field: "Latency",
    type: "quantitative",
    color: "#F6B187",
    axis: { title: null, ticks: false, labels: false }
  },
  {
    field: "Latency",
    type: "quantitative",
    color: "#4BE4E2",
    axis: { title: null, ticks: false, labels: false }
  }
];
const color = {
  field: "resquest_method",
  type: "nominal",
  legend: {
    direction: "horizontal",
    orient: "bottom",
    title: null,
    symbolType: "stroke",
    labelFontSize: 15,
    columnPadding: 50,
    symbolStrokeWidth: 5
  },
  domain: ["Get", "Put", "Delete", "List"],
  scale: {
    range: ["#18DFAD", "#968BFF", "#F6B187", "#4BE4E2"]
  }
};
const lineConfig = { strokeWidth: 1, opacity: 0.5 };

const id = "vis";
const id_without_axis = "vis2";

// forecast chart
const xAxis_forecast_chart = {
  field: "time",
  type: "ordinal",
  title: null,
  axis: { labelAngle: 0 },
  // sort the according the given xlabel
  sort: ["-3m", "Now", "+3m"]
};
const yAxis_forecast_chart = [
  {
    field: "capacity",
    type: "quantitative",
    color: "#968BFF",
    axis: { title: null, ticks: false, labels: false }
  }
];
const lineConfig_forecast_chart = {
  interpolate: "monotone"
};
const id_forecast_chart = "vis_forecast_chart";
storiesOf("LineChart", module).add("Default", () => {
  return (
    <Wrapper>
      <Title>Vege-Lite line chart demo</Title>
      <LineChart
        id={id}
        data={data}
        xAxis={xAxis}
        yAxis={yAxis}
        width={1000}
        tooltip={true}
      />
      <Title>Vege-Lite line chart without axis</Title>
      <LineChart
        id={id_without_axis}
        data={data_graph_with_axis}
        xAxis={xAxis_without_axis}
        yAxis={yAxis_without_axis}
        width={800}
        color={color}
        tooltip={false}
        lineConfig={lineConfig}
      />
      <Title>Vege-Lite forecast chart</Title>
      <LineChart
        id={id_forecast_chart}
        data={forecast_data}
        xAxis={xAxis_forecast_chart}
        yAxis={yAxis_forecast_chart}
        tooltip={false}
        width={300}
        height={150}
        lineConfig={lineConfig_forecast_chart}
        displayTrendLine={true}
      />
    </Wrapper>
  );
});
