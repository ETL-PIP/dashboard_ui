import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React from "react";

interface TableWrapperProps {
  data: Array<{
    appearance_id: string;
    player_name: string;
    goals: number;
    assists: number;
    yellow_cards: number;
    red_cards: number;
    minutes_played: number;
    competition_id: string;
    date: string;
  }>;
}

export const TableWrapper: React.FC<TableWrapperProps> = ({ data }) => {
  // Define columns based on the `appearances` data structure
  const columns = [
    { name: "Player Name", uid: "player_name" },
    { name: "Goals", uid: "goals" },
    { name: "Assists", uid: "assists" },
    { name: "Yellow Cards", uid: "yellow_cards" },
    { name: "Red Cards", uid: "red_cards" },
    { name: "Minutes Played", uid: "minutes_played" },
    { name: "Competition", uid: "competition_id" },
    { name: "Date", uid: "date" },
  ];

  return (
    <div className="w-full flex flex-col gap-4">
      <Table aria-label="Player Appearance Stats Table">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align="start"
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={data}>
          {(item) => (
            <TableRow key={item.appearance_id}>
              {(columnKey) => (
                <TableCell>
                  {item[columnKey as keyof typeof item] ?? "N/A"}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
