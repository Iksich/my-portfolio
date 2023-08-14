import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RiMenuUnfoldLine } from 'react-icons/ri';
import { MyLinks } from './components/MyLinks';
import styles from './heading.module.scss';

export const Heading = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const toggleref = useRef<HTMLButtonElement>(null); // Use React.RefObject<HTMLButtonElement>

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toggleref.current
        && !toggleref.current.contains(event.target as Node)) {
        setOpenMobile(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggleref]);

  const handleMobileViewOpen = () => {
    setOpenMobile(true);
  };

  const handleMobileViewClose = () => {
    setOpenMobile(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleMobileViewClose();
    }
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
        <button
          className={`${styles.navbarMobileOpen} ${
            openMobile ? styles.navbarMobileOpenActive : ''
          }`}
          type="button"
          onClick={handleMobileViewClose}
          onKeyDown={handleKeyDown} // Add a keyDown event handler for accessibility
          ref={toggleref}
        >
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </button>
      </div>
    </header>
  );
};
