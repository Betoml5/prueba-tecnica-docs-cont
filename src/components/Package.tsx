import { IPackage } from "@/types";
import React from "react";

interface Props {
  item: IPackage;
}

const Package = ({ item }: Props) => {
  return (
    <div className="flex-1 text-center bg-package-background p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-package-text">{item.name}</h2>
      <hr />
      <div className="flex justify-center  items-center mt-4 md:mb-2">
        <span className="text-xs md:text-lg self-end mr-1 font-bold">$</span>
        <span className="text-3xl font-bold md:text-5xl">{item.price}</span>
        <span className="text-xs md:text-lg md:self-end">+ IVA/mes</span>
      </div>
      <p className="text-ellipsis ">{item.description}</p>
      <button className="text-white font-semibold bg-package-text  px-10 py-1 rounded-full mt-2 md:text-xl ">
        Elegir
      </button>
    </div>
  );
};

export default Package;
