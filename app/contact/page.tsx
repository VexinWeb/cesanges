"use client";

import Image from "next/image";
import ContactForm from "../components/ContactForm";
import { useState, useEffect } from "react"; // Importez useState et useEffect
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";

// export const metadata = {
//   title: "Aimé Cesanges | contact",
// };

const ContactPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [backgroundColors, setBackgroundColors] = useState<string[]>([]); // État local pour les couleurs aléatoires

  const imagePath = "/images/contact/portrait_xs_bw.jpeg";
  const imageArray = new Array(24).fill(imagePath);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  //

  useEffect(() => {
    let colorsRef = []; // Créez une référence pour stocker les couleurs aléatoires

    const generateRandomColors = () => {
      const colors = [];
      for (let i = 0; i < imageArray.length; i++) {
        colors.push(getRandomColor());
      }
      colorsRef = colors; // Mettez à jour la référence sans déclencher de rendu
      setBackgroundColors(colors);
    };

    // Générez des couleurs aléatoires toutes les 5 secondes
    generateRandomColors();
    const interval = setInterval(generateRandomColors, 5000); // Changement ici (5000 ms)

    return () => {
      clearInterval(interval);
    };
  }, [imageArray.length]); // Retirez la dépendance imageArray

  //

  const openFormOverlay = () => {
    setShowForm(true);
  };

  const closeFormOverlay = () => {
    setShowForm(false);
  };

  return (
    <div>
      {/* <div className="my-32 p-4 sm:p-10"> */}
      <div className="mt-32 p-4 sm:p-10">
        <div className="grid grid-cols-8 grid-rows-3 gap-2">
          {imageArray.map((imagePath, index) => (
            <div key={index} className="relative w-full h-0 pb-[100%] group">
              <div
                className="absolute inset-0 bg-opacity-0"
                style={{ backgroundColor: backgroundColors[index] }} // Utilisez la couleur correspondante
              ></div>
              <div className="absolute w-full h-full object-cover">
                <Image
                  src={imagePath}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover opacity-70"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="bg-slate-100 flex gap-4 my-10 py-16 min-w-80 flex-col md:flex-row">
          <h1 className="w-full items-center font-semibold text-5xl justify-center flex">
            Contact
          </h1>
          <div>
            <p className="w-full flex items-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              nulla iure officia, laudantium libero sed voluptatibus nihil
              consequatur, molestiae quis ducimus nostrum, iste aut. Deserunt
              corrupti ab mollitia fuga maxime!
            </p>
            <div className="my-4 flex flex-col md:flex-row">
              <div className="w-full pb-4">
                <strong>E-mail</strong>
                <br />
                aimecesanges@gmail.com
              </div>
              <div className="w-full">
                <strong>Téléphone</strong>
                <br />
                0631709252
              </div>
            </div>
            <div className="flex flex-col items-center">
              <button
                className="my-6 py-8 w-80 text-white text-stroke"
                style={{ backgroundColor: backgroundColors[0] }} // Utilisez la première couleur
                onClick={openFormOverlay}
              >
                Me contacter
              </button>
              {showForm && (
                // <div className="overlay">
                <div className="flex justify-left items-center">
                  <div className="flex flex-col mt-12">
                    <button
                      className="text-xs text-gray-600 text-right"
                      onClick={closeFormOverlay}
                    >
                      Fermer le formulaire
                    </button>
                    <ContactForm />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between font-bold tracking-wide my-10 px-4 sm:px-10 text-base sm:text-3xl">
        <Link href="/sculpture" className="flex">
          <div className="flex items-center pe-4">
            <ArrowBackIosIcon style={{ fontSize: "1.5rem" }} />
          </div>
          <div className="flex items-center">Sculpture</div>
        </Link>
        <Link href="/peinture" className="flex">
          <div className="flex items-center">Peinture</div>
          <div className="flex items-center ps-4">
            <ArrowForwardIosIcon style={{ fontSize: "1.5rem" }} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ContactPage;
