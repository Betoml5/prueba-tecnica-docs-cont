import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <>
      <div className="card">
        <Image
          src="/calculadora.svg"
          alt="Calculadora"
          width={64}
          height={64}
          className="mx-auto"
        />
        <p>Hacemos tu contabilidad mensual</p>
      </div>
      <div className="card">
        <Image
          src="/porcentaje-90.svg"
          alt="Porcentaje 90"
          width={64}
          height={64}
        />
        <p>Calculamos tus impuestos</p>
      </div>
      <div className="card">
        <Image
          src="/enviar-dinero.svg"
          alt="Enviar dinero"
          width={64}
          height={64}
        />
        <p>Presentamos tus declaraciones SAT</p>
      </div>
      <div className="card">
        <Image
          src="/mano-sosteniendo-usd.svg"
          alt="Mano sosteniendo USD"
          width={64}
          height={64}
        />
        <p>Cálculo, timbrado y envió de nomina</p>
      </div>
    </>
  );
};

export default Features;
