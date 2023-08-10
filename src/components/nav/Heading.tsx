import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { useState, useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai"
import { RiMenuUnfoldLine } from "react-icons/ri"

export const Heading = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const toggleref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toggleref.current && !toggleref.current.contains(event.target as Node)) {
        setOpenMobile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleref]);

  const handleMobileViewOpen = () => {
    setOpenMobile(true);
  };

  const handleMobileViewClose = () => {
    setOpenMobile(false);
  };

  return (
    <header className={styles.heading}>
      <MyLinks />
      <div className={styles.mobile}>
        {openMobile ? (
          <AiOutlineClose onClick={handleMobileViewClose} />
        ) : (
          <RiMenuUnfoldLine onClick={handleMobileViewOpen} />
        )}
        <div
          className={`${styles.navbarMobileOpen} ${
            openMobile ? styles.navbarMobileOpenActive : ""
          }`}
          onClick={handleMobileViewClose}
          ref={toggleref}
        >
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};
