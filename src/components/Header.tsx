import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <Image
        className="mx-auto"
        src="/logo.jpg"
        alt="Logo"
        width={300}
        height={50}
      />
      <div className="text-center md:text-3xl md:mb-10">
        <p>¡Nuevo servicio!</p>
        <p>Encárgate de tu negocio, nosotros de tu contabilidad.</p>
      </div>
    </div>
  );
};

export default Header;
