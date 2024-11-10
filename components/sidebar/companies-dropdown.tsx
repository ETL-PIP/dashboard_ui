"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import React, { useState } from "react";
import { AcmeIcon } from "../icons/acme-icon";
import { AcmeLogo } from "../icons/acmelogo";
import { BottomIcon } from "../icons/sidebar/bottom-icon";

interface Company {
  name: string;
  location: string;
  logo: React.ReactNode;
}

export const CompaniesDropdown = () => {
  const [company, setCompany] = useState<Company>({
    name: "Acme Co.",
    location: "Palo Alto, CA",
    logo: <AcmeIcon />,
  });
  return (
    <Dropdown
      classNames={{
        base: "w-full min-w-[260px]",
      }}
    >
      {[<div className="cursor-pointer" key="dropdown-trigger">
        <div className="flex items-center gap-2">
          {company.logo}
          <div className="flex flex-col gap-4" style={
            {
              marginTop: "-24px",
              fontWeight: "bold",
            }
          }>
            <h3 className="text-xl font-medium m-0 text-default-900 -mb-4 whitespace-nowrap">
                ETL
            </h3>
             
          </div>
          
        </div>
      </div>]}
       
    </Dropdown>
  );
};
