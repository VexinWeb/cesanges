import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
import Link from "next/link";
import { cursorTo } from "readline";

const Footer = () => {
	return (
		<footer className="font-light relative h-48 my-10 flex flex-col items-center justify-evenly">
			<div>
				<a
					target="_blank"
					href="https://www.instagram.com/aime_cesanges_wolfgang/"
				>
					<InstagramIcon style={{ fontSize: "1.3rem" }} />
				</a>
			</div>
			<br />
			<div
				aria-label="Lien vers mon site de vente Singulart"
				className="cursor-pointer mb-6 text-center"
			>
				<Link
					href="https://singulart.cmail20.com/t/n/j-l-3f26699c218111ef997d223f34ccd412-l-y-r-l/"
					target="_blank"
				>
					Mes travaux en vente sur SINGULART
				</Link>
			</div>
			<br />
			<br />
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
		</footer>
	);
};

export default Footer;
