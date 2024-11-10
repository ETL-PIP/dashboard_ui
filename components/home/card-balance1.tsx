import React from "react";

interface DataItem {
  goals: number;
}

interface CardBalance1Props {
  data: DataItem[];
}

export const CardBalance1: React.FC<CardBalance1Props> = ({ data }) => {
  // Calculate total goals from all appearances
  const totalGoals = data.reduce((acc, item) => acc + item.goals, 0);

  return (
    <div className="bg-white shadow-lg rounded-lg p-5">
      <h4 className="text-lg font-semibold">Total Goals</h4>
      <p className="text-2xl font-bold">{totalGoals}</p>
    </div>
  );
};
