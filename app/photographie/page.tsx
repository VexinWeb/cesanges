import Image from "next/image";
import Link from "next/link";
import dataPhotographie from "../mock/dataPhotographie";
import MonTravailCards from "../components/MonTravailCards";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const metadata = {
  title: "Aimé Cesanges | photographie",
};

const PhotographiePage = () => {
  const dynamicHeight: string = `calc(100vh - 400px)`;

  return (
    <div>
      <div className="flex flex-col items-center justify-between h-screen">
        <Image
          src="/images/photographie/1.jpg"
          alt="Photographie autoportrait"
          className=" inset-0 w-full h-full object-cover"
          width={600}
          height={600}
        ></Image>
      </div>
      <div className="bg-slate-100 flex gap-4 flex-col sm:flex-row py-32 px-4 sm:px-10">
        <h1 className="w-full flex items-center font-semibold text-5xl justify-start sm:justify-center">
          Photographie
        </h1>
        <p className="w-full flex items-center">
          Ma photographie est entièrement numérique, explorant à la fois la
          couleur et le noir et blanc pour créer une gamme d&apos;émotions
          visuelles. Je me distingue par l&apos;utilisation du clair-obscur,
          créant des contrastes impressionnants et des jeux de lumière qui
          donnent une profondeur unique à mes clichés. Mon travail met en avant
          l&apos;humain, capturant des émotions, des récits et des visages pour
          une perspective authentique de la vie. En tant qu&apos;artiste, je
          m&apos;engage également dans l&apos;autoportrait, explorant diverses
          facettes de mon identité artistique. Ma collection de photographies
          compte environ 1000 œuvres accumulées sur près de 20 ans, reflétant
          mon parcours artistique et mes inspirations. À travers elle, je
          raconte des histoires visuelles qui évoquent des émotions et des
          réflexions, centrées sur l&apos;humain et l&apos;authenticité. Je suis
          ravi de partager cette diversité d&apos;œuvres avec vous.
        </p>
      </div>
      {/*  */}
      {/* Grid of 12 images */}
      {/*  */}
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 w-full p-4 sm:p-10">
        {/* Each image */}
        {/* pb-[75%] for the image to keep a 3/4 ratio */}
        {/*  */}
        {dataPhotographie?.map((peinture) => (
          <Link
            href="/contact"
            key={peinture.id}
            className="relative cursor-pointer group w-full pb-[100%] bg-slate-100"
          >
            <MonTravailCards
              title={peinture.title}
              src={peinture.src}
              alt={peinture.alt}
              material={peinture.material}
              dimensions={peinture.dimensions}
              date={peinture.date}
              location={peinture.location}
              price={peinture.price}
            />
          </Link>
        ))}
      </div>
      <div className="flex flex-row justify-between font-bold tracking-wide my-10 px-4 sm:px-10 text-base sm:text-3xl">
        <Link href="/sculpture" className="flex">
          <div className="flex items-center pe-4">
            <ArrowBackIosIcon style={{ fontSize: "1.5rem" }} />
          </div>
          <div className="flex items-center">Sculpture</div>
        </Link>
        <Link href="/contact" className="flex">
          <div className="flex items-center">Contact</div>
          <div className="flex items-center ps-4">
            <ArrowForwardIosIcon style={{ fontSize: "1.5rem" }} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PhotographiePage;
