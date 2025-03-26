import React from "react";

interface Props {
  onClick: () => void;
}

const CTA = ({ onClick }: Props) => {
  return (
    <div>
      <p className="text-xl text-center p-6 mt-4 md:max-w-4xl md:mx-auto md:text-2xl">
        ¿Quieres cambiar a tu Conta? Nosotros nos encargamos de llevar a cabo la
        transición de toda tu contabilidad hasta el dia de hoy.
      </p>
      <div className="flex flex-col p-4 md:flex-row max-w-7xl mx-auto gap-x-4 mb-10 md:text-lg">
        <button
          onClick={onClick}
          className="cursor-pointer bg-[#82c828] text-white py-2  px-10  rounded-full md:flex-1 md:py-3"
        >
          Ver paquetes
        </button>
        <button className="bg-blue-600 text-white py-2  px-10  rounded-full mt-2 md:flex-1 md:py-3 md:mt-0">
          Agenda una cita con un contador experto
        </button>
      </div>
    </div>
  );
};

export default CTA;
