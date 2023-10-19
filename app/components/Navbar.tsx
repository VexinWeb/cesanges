"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Importez usePathname depuis next/navigation
import InstagramIcon from "@mui/icons-material/Instagram";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isContactPage = pathname === "/contact";
  const isSculpturePage = pathname === "/sculpture";
  const confirmationPage = pathname === "/confirmation";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  // Event handler to go to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Event handler to monitor scrolling
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="flex items-center justify-between h-14 px-4 sm:px-10 pt-14 absolute top-0 right-0 left-0 bottom-0 z-10">
      <Link href="/">
        {/* <div className="font-bold text-2xl sm:text-3xl tracking-wider"> */}
        <div
          className={`font-bold text-xl sm:text-2xl tracking-wider ${
            isHomePage || isContactPage || isSculpturePage || confirmationPage
              ? "text-black"
              : "text-white"
          }`}
        >
          Aimé Cesanges
        </div>
      </Link>
      {/* Desktop menu */}
      <div className="hidden lg:block">
        <ul className="flex items-center">
          <Link href="/">
            <li
              className={`p-5 m-1 text-lg font-light ${
                isHomePage ||
                isContactPage ||
                isSculpturePage ||
                confirmationPage
                  ? "text-black"
                  : "text-white"
              } ${!isContactPage ? "underline underline-offset-8" : ""}`}
              onClick={handleMenuItemClick}
            >
              Mon travail
            </li>
          </Link>
          <Link href="/contact">
            <li
              className={`p-5 m-1 text-lg font-light ${
                isHomePage ||
                isContactPage ||
                isSculpturePage ||
                confirmationPage
                  ? "text-black"
                  : "text-white"
              } ${isContactPage ? "underline underline-offset-8" : ""}`}
              onClick={handleMenuItemClick}
            >
              Contact
            </li>
          </Link>
          <a
            target="_blank"
            href="https://www.instagram.com/aime_cesanges_wolfgang/"
          >
            <li
              className={`p-5 m-1 text-lg font-light ${
                isHomePage ||
                isContactPage ||
                isSculpturePage ||
                confirmationPage
                  ? "text-black"
                  : "text-white"
              }`}
              onClick={handleMenuItemClick}
            >
              <InstagramIcon
                style={{ fontSize: "1.3rem", fontWeight: "lighter" }}
              />
            </li>{" "}
          </a>
        </ul>
      </div>
      {/*  */}
      <div className="block lg:hidden">
        <button
          className={`text-black relative z-50 ${
            isHomePage || isContactPage || isSculpturePage
              ? "text-black"
              : "text-white"
          }`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span className="z-30">
            {isMenuOpen ? (
              <CloseIcon
                style={{
                  fontSize: "2rem",
                  color: "black",
                }}
              />
            ) : (
              <MenuIcon style={{ fontSize: "2rem" }} />
            )}
          </span>
        </button>
        {/*  */}
        {/* Mobile menu */}
        {/*  */}
        {/* Button to go to top of page */}
        {showScrollToTop && (
          <button
            className="fixed bottom-4 right-4 p-2 text-black bg-white rounded-full z-50"
            onClick={scrollToTop}
            aria-label="Scroll to Top"
          >
            <ArrowUpwardIcon style={{ fontSize: "2rem" }} />
          </button>
        )}

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-0 left-0 w-full h-fit pb-10 bg-slate-200 z-20 custom-fade-in`}
        >
          <ul className="flex flex-col items-center pt-10">
            <li>
              <Link href="/">
                <button className="p-5 m-1" onClick={handleMenuItemClick}>
                  Mon travail
                </button>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <button className="p-5 m-1" onClick={handleMenuItemClick}>
                  Contact
                </button>
              </Link>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/aime_cesanges_wolfgang/"
              >
                <div className="p-5 m-1" onClick={handleMenuItemClick}>
                  Instagram
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
