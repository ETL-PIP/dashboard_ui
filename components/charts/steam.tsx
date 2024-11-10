import React from "react";
import Chart from "react-apexcharts";
import { Props } from "react-apexcharts";

interface AppearanceData {
  player_name: string;
  goals: number;
  assists: number;
  yellow_cards: number;
  red_cards: number;
  minutes_played: number;
  competition_id: string;
  date: string;
}

interface SteamProps {
  data: AppearanceData[];
}

export const Steam: React.FC<SteamProps> = ({ data }) => {
  // Process data to create series for the chart
  const seriesData = [
    {
      name: "Goals",
      data: data.map((item) => item.goals),
    },
    {
      name: "Assists",
      data: data.map((item) => item.assists),
    },
    {
      name: "Yellow Cards",
      data: data.map((item) => item.yellow_cards),
    },
    {
      name: "Red Cards",
      data: data.map((item) => item.red_cards),
    },
  ];

  const chartOptions: Props["options"] = {
    chart: {
      type: "area",
      animations: {
        easing: "linear",
        speed: 300,
      },
      foreColor: "hsl(var(--nextui-default-800))",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: data.map((item) => item.date),
      labels: {
        style: {
          colors: "hsl(var(--nextui-default-800))",
        },
      },
      axisBorder: {
        color: "hsl(var(--nextui-default-200))",
      },
      axisTicks: {
        color: "hsl(var(--nextui-default-200))",
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "hsl(var(--nextui-default-800))",
        },
      },
    },
    tooltip: {
      enabled: true,
    },
    grid: {
      show: true,
      borderColor: "hsl(var(--nextui-default-200))",
    },
    stroke: {
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
  };

  return (
    <div className="w-full z-20">
      <div id="chart">
        <Chart options={chartOptions} series={seriesData} type="area" height={425} />
      </div>
    </div>
  );
};
