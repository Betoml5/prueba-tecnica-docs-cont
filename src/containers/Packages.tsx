"use client";
import Package from "@/components/Package";
import { IPackage } from "@/types";
import { use } from "react";

interface Props {
  items: Promise<IPackage[]>;
}

const Packages = ({ items }: Props) => {
  const allPackages = use(items);

  return (
    <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4">
      {allPackages?.map((item) => (
        <Package item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Packages;
