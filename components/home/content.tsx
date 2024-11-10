"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Link } from "@nextui-org/react";
import NextLink from "next/link";

// Components for displaying data
import { TableWrapper } from "../table/table";
import { CardBalance1 } from "./card-balance1";
import { CardBalance2 } from "./card-balance2";
import { CardAgents } from "./card-agents";
import { CardTransactions } from "./card-transactions";

// Dynamically import Chart component
const Chart = dynamic(() => import("../charts/steam").then((mod) => mod.Steam), {
  ssr: false,
});

export const Content = () => {
  // State to store data from the API
  const [appearances, setAppearances] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the /appearances endpoint
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/appearances");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setAppearances(data);
      } catch (error) {
        console.error("Error fetching appearances:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-full lg:px-6">
      <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0 flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
        
        {/* Main content section */}
        <div className="mt-6 gap-6 flex flex-col w-full">
          
          {/* Balance Cards Section */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Available Balance</h3>
            <div className="grid md:grid-cols-2 grid-cols-1 2xl:grid-cols-3 gap-5 justify-center w-full">
              <CardBalance1 data={appearances} />
              <CardBalance2 data={appearances} />
              {/* Uncomment below if you have the third balance card */}
              {/* <CardBalance3 data={appearances} /> */}
            </div>
          </div>

          {/* Statistics Chart Section */}
          <div className="h-full flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Statistics</h3>
            <div className="w-full bg-default-50 shadow-lg rounded-2xl p-6">
              {loading ? <p>Loading chart...</p> : <Chart data={appearances} />}
            </div>
          </div>
        </div>

        {/* Left Section: Optional - Uncomment if you want to display agent and transaction cards */}
        <div className="mt-4 gap-2 flex flex-col xl:max-w-md w-full">
          <h3 className="text-xl font-semibold">Section</h3>
          <div className="flex flex-col justify-center gap-4 flex-wrap md:flex-nowrap md:flex-col">
            {/* <CardAgents data={appearances} />
            <CardTransactions data={appearances} /> */}
          </div>
        </div>
      </div>

      {/* Latest Users Table Section */}
      <div className="flex flex-col justify-center w-full py-5 px-4 lg:px-0 max-w-[90rem] mx-auto gap-3">
        <div className="flex flex-wrap justify-between">
          <h3 className="text-center text-xl font-semibold">Latest Users</h3>
          <Link href="/accounts" as={NextLink} color="primary" className="cursor-pointer">
            View All
          </Link>
        </div>
        <TableWrapper data={appearances} />
      </div>
    </div>
  );
};
