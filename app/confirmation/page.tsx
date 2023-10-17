import React from "react";

export const metadata = {
  title: "Aimé Cesanges | confirmation",
};

const ConfirmationPage = () => {
  // Calculer la hauteur dynamiquement
  const dynamicHeight = `calc(100vh - 288px)`;

  return (
    // <div className="mb-24 mx-auto w-full lg:w-3/5 xl:w-2/5">
    <div
      style={{ height: dynamicHeight }}
      className="flex justify-center items-center"
    >
      <div
        style={{
          transform: "translateX(-200px)",
          //   transition: "transform 0.5s ease",
          animation: "slideIn 1s forwards",
        }}
        className="max-w-md mx-7 md:mx-auto flex align-center"
      >
        Message envoyé via le formulaire de contact
      </div>
    </div>
  );
};

export default ConfirmationPage;
