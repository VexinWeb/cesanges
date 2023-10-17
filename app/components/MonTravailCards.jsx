import Image from "next/image";
import Link from "next/link";

const MonTravailCards = ({
  title,
  material,
  dimensions,
  date,
  location,
  price,
  src,
  alt,
}) => {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-contain"
        width={600}
        height={600}
      />
      <div className="absolute w-full h-full flex flex-col items-center justify-end opacity-70 transition-opacity md:opacity-0 md:group-hover:opacity-80">
        <div className="p-1 bg-white opacity-100 w-full justify-around flex flex-col xl:flex-row text-right xl:text-left text-black font-light tracking-wider text-xs md:text-sm">
          <div className="">{title}</div>
          <div>{material}</div>
          <div>{dimensions}</div>
          <div>{date}</div>
          <div>{location}</div>
          <div>{price}</div>
        </div>
      </div>
    </div>
  );
};

export default MonTravailCards;
