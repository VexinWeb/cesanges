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
                  // alt={`Image ${index + 1}`}
                  alt="Photographie autoportrait"
                  className="w-full h-full object-cover opacity-70"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="bg-slate-100 flex gap-4 my-10 py-16 min-w-80 flex-col md:flex-row px-4 sm:px-10">
          <h1 className="w-full items-center font-semibold text-5xl justify-center flex px-4 sm:px-10 md:w-1/2">
            Contact
          </h1>
          <div className="md:w-1/2">
            <p className="w-full flex items-center">
              Né en 1992, je suis un artiste autodidacte travaillant depuis mon
              atelier à Albi, en Occitanie. Au cours de ma carrière artistique,
              j&apos;ai créé et accumulé plus d&apos;un millier d&apos;œuvres
              depuis le milieu des années 2000. Mon travail est une exploration
              constante de l&apos;art à travers différentes disciplines,
              notamment la peinture à l&apos;huile, la photographie et la
              sculpture. Mes influences artistiques sont variées, mais je puise
              une grande inspiration des maîtres classiques tels que Le
              Caravage, Manet ou Courbet. Leurs œuvres ont façonné ma
              compréhension de l&apos;art et influencé ma propre pratique
              artistique. En parallèle, je m&apos;intéresse également à des
              artistes contemporains tels que Cartier-Bresson, Basquiat et Bram
              Bogart, qui apportent une dimension moderne à mon travail. Ma
              collection, composée de plus de mille œuvres, témoigne de ma
              passion pour l&apos;expression artistique et de mon désir de
              partager des histoires visuelles uniques avec le monde. Mon art
              est un reflet de mon voyage artistique, de mes influences et de
              mon exploration continue de la créativité.
            </p>
            <div className="mt-8 mb-4 flex flex-col md:flex-row">
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
              {showForm ? (
                // Si showForm est vrai, affichez le bouton "Fermer le formulaire" ou "Me contacter"
                <button
                  className="mt-6 py-8 w-80 text-white custom-text-stroke"
                  style={{ backgroundColor: backgroundColors[0] }}
                  onClick={closeFormOverlay}
                >
                  Me contacter
                </button>
              ) : (
                // Si showForm est faux, affichez le bouton "Me contacter"
                <button
                  className="mt-6 py-8 w-80 text-white custom-text-stroke"
                  style={{ backgroundColor: backgroundColors[0] }}
                  onClick={openFormOverlay}
                >
                  Me contacter
                </button>
              )}
              {showForm && (
                <div className="flex justify-left items-center">
                  {/* <div className="flex flex-col mt-12"> */}
                  <div className="flex flex-col">
                    <ContactForm />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between font-bold tracking-wide my-10 px-4 sm:px-10 text-base sm:text-3xl">
        <Link href="/photographie" className="flex">
          <div className="flex items-center pe-4">
            <ArrowBackIosIcon style={{ fontSize: "1.5rem" }} />
          </div>
          <div className="flex items-center">Photographie</div>
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
