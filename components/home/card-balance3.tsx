import React from "react";

interface DataItem {
  minutes_played: number;
}

interface CardBalance3Props {
  data: DataItem[];
}

export const CardBalance3: React.FC<CardBalance3Props> = ({ data }) => {
  // Calculate total minutes played from all appearances
  const totalMinutes = data.reduce((acc, item) => acc + item.minutes_played, 0);

  return (
    <div className="bg-white shadow-lg rounded-lg p-5">
      <h4 className="text-lg font-semibold">Total Minutes Played</h4>
      <p className="text-2xl font-bold">{totalMinutes}</p>
    </div>
  );
};
