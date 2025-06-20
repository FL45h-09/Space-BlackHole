'use client';
import { useEffect, useState } from "react";
import { LogoIcon } from "@/_components/atoms/svgIcons/SvgIcons";
import { Navbar } from "@/_components/atoms/navbar/Navbar";
import { PrimaryButton } from "@/_components/atoms/buttons/Buttons";

export const HeaderSection = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50); // 👈 Adjust this threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const afterScroll = "w-[50%] left-1/2 -translate-x-1/2 px-[30px] backdrop-blur-[24px] bg-black/50 rounded-[40px] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.2),_0px_2px_8px_0px_rgba(0,0,0,0.16)] origin-center";

  return (
    <header
      className={`fixed top-4 w-[90%] left-1/2 -translate-x-1/2 z-50 transition-all duration-300 flex justify-between gap-4 items-center py-2 ${
        scrolled ? afterScroll : ""
      }`}
    >
      <div className="logosec"><LogoIcon /></div>
      <div className="menusec"><Navbar /></div>
      <div className="ctasec"><PrimaryButton /></div>
    </header>
  );
};
