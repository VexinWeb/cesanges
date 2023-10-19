import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="font-light relative h-48 my-10 flex flex-col items-center justify-evenly">
      <div>
        <a
          target="_blank"
          href="https://www.instagram.com/aime_cesanges_wolfgang/"
        >
          <InstagramIcon style={{ fontSize: "1.3rem" }} />
        </a>
      </div>
      <div className="flex items-center">
        <div>Conçu par</div>
        <Link href="https://vexinweb.fr/" target="_blank">
          <Image
            src="/images/logos/vexinweb.png"
            alt="Logo VexinWEB"
            style={{
              width: "100%",
              maxHeight: "100px",
              objectFit: "contain",
            }}
            width={50}
            height={50}
          ></Image>
        </Link>
      </div>
      {/* <div>Conçu par VexinWEB</div> */}
    </div>
  );
};

export default Footer;
