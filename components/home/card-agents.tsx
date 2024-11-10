import { Avatar, AvatarGroup, Card, CardBody } from "@nextui-org/react";
import React from "react";

interface CardAgentsProps {
  pictureUsers: string[];
}

export const CardAgents: React.FC<CardAgentsProps> = ({ pictureUsers }) => {
  return (
    <Card className="bg-default-50 rounded-xl shadow-md px-4 py-6 w-full">
      <CardBody className="py-5 gap-6">
        <div className="flex gap-2.5 justify-center">
          <div className="flex flex-col border-dashed border-2 border-divider py-2 px-6 rounded-xl">
            <span className="text-default-900 text-xl font-semibold">
              {"⭐"} Agents
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6 flex-col">
          <span className="text-xs">
            Meet your agenda and see their ranks to get the best results
          </span>
          <AvatarGroup isBordered>
            {pictureUsers.map((src, index) => (
              <Avatar key={index} src={src} />
            ))}
          </AvatarGroup>
        </div>
      </CardBody>
    </Card>
  );
};
