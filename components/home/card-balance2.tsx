import React from "react";

interface DataItem {
  assists: number;
}

interface CardBalance2Props {
  data: DataItem[];
}

export const CardBalance2: React.FC<CardBalance2Props> = ({ data }) => {
  // Calculate total assists from all appearances
  const totalAssists = data.reduce((acc, item) => acc + item.assists, 0);

  return (
    <div className="bg-white shadow-lg rounded-lg p-5">
      <h4 className="text-lg font-semibold">Total Assists</h4>
      <p className="text-2xl font-bold">{totalAssists}</p>
    </div>
  );
};
