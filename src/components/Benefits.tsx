import React from "react";

const Benefits = () => {
  return (
    <>
      <h2 className=" text-xl font-semibold ml-8 md:text-2xl md:mb-4">
        Beneficios
      </h2>
      <ul className="max-w-md space-y-1  list-inside md:text-lg">
        <li className="flex">
          <svg
            className="w-5.5 h-5.5 me-2 text-blue-500  shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>

          <div>
            <p className="font-semibold">Automático</p>
            <p className="">
              Ahorra tiempo al eliminar la tarea de enviar facturas a tu
              contador ¡El proceso es automático!
            </p>
          </div>
        </li>
        <li className="flex">
          <svg
            className="w-5.5 h-5.5 me-2 text-blue-500 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <div>
            <p className="font-semibold">Servicio Oportuno</p>
            <p className="">
              Comunicación más fácil y efectiva con tu contador
            </p>
          </div>
        </li>
        <li className="flex ">
          <svg
            className="w-5.5 h-5.5 me-2 text-blue-500 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <div>
            <p className="font-semibold">Simplicidad</p>
            <p className="">Información contable en tiempo real.</p>
          </div>
        </li>
        <li className="flex ">
          <svg
            className="w-5.5 h-5.5 me-2 text-blue-500 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <div>
            <p className="font-semibold">Confiable</p>
            <p className="">
              Cálculos hechos por uno de nuestros contadores expertos asignado
              especialmente a tu negocio.
            </p>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Benefits;
