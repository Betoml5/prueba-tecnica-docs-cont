import Image from "next/image";
import React from "react";

const Steps = () => {
  return (
    <div className="flex flex-col  text-center gap-y-10 items-center bg-blue-600 p-10 md:flex-row md:justify-between">
      <div className="flex flex-col items-center flex-1">
        <Image src="/pen.svg" alt="Pen" width={100} height={100} />
        <p className="text-[#caf03c] text-2xl mt-4 font-bold md:text-3xl">
          PASO 1
        </p>
        <p className="text-white text-xl font-semibold">Agrega tu FIEL</p>
      </div>
      <div className="flex flex-col items-center flex-1">
        <Image src="/database.svg" alt="Pen" width={100} height={100} />
        <p className="text-[#caf03c] text-2xl mt-4 font-bold md:text-3xl">
          PASO 2
        </p>
        <p className="text-white text-xl font-semibold">
          Sincroniza tus cuentas bancarias
        </p>
      </div>
      <div className="flex flex-col items-center flex-1">
        <Image src="/document.svg" alt="Pen" width={100} height={100} />
        <p className="text-[#caf03c] text-2xl mt-4 font-bold md:text-3xl">
          PASO 3
        </p>
        <p className="text-white text-xl font-semibold">
          Recibe mensualmente tu declaración de impuestos
        </p>
      </div>
    </div>
  );
};

export default Steps;
