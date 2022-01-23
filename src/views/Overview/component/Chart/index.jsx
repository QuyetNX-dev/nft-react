import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

function Chart({ data }) {
  return (
    <ResponsiveContainer minHeight={376} width="100%">
      <LineChart
        data={data}
        style={{ background: "#181320", borderRadius: "16px" }}
      >
        <Line
          dataKey="value"
          type="monotone"
          stroke="#AA1EFF"
          color="#AA1EFF"
          dot={false}
        />

        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          minTickGap={50}
          padding={{
            left: 25,
            right: 25,
          }}
        />
        <YAxis
          dataKey="value"
          axisLine={false}
          tickLine={false}
          orientation="right"
          tickFormatter={(str) => "$" + str + "m"}
          domain={["auto", "auto"]}
          type="number"
          padding={{
            top: 25,
            bottom: 25,
          }}
          tick={{
            fontSize: 12,
          }}
        />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;
