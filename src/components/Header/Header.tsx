import { useEffect, useRef, useState } from 'react';
import LeafLineIcon from 'remixicon-react/LeafLineIcon';
import CloseLineIcon from 'remixicon-react/CloseLineIcon';
import MoonLineIcon from 'remixicon-react/MoonLineIcon';
import SunLineIcon from 'remixicon-react/SunLineIcon';
import MenuLineIcon from 'remixicon-react/MenuLineIcon';

import styles from './Header.module.scss';

const menuItems: string[] = ['Home', 'About', 'Products', 'FAQs', 'Contact'];

const Header = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrollPoint, setIsScrollPoint] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  const handleOnClickLink = (link: string) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  const handleOnClickClose = () => {
    setIsOpen(false);
  };

  const handleOnClickOpen = () => {
    setIsOpen(true);
  };

  const handleOnClickTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    const handleScrollCheck = () => {
      if (window.scrollY >= 80) {
        setIsScrollPoint(true);
      } else {
        setIsScrollPoint(false);
      }
    };

    window.addEventListener('scroll', handleScrollCheck);

    return () => {
      window.removeEventListener('scroll', handleScrollCheck);
    };
  }, []);

  useEffect(() => {
    const handleBodyClick = (e: MouseEvent) => {
      if (menuRef.current && !e.composedPath().includes(menuRef.current)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        document.body.addEventListener('click', handleBodyClick);
      });
    }

    return () => {
      document.body.style.overflow = 'scroll';
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, [isOpen]);

  useEffect(() => {
    document.body.classList.toggle('dark-theme');
  }, [isDark]);

  return (
    <header
      className={`${styles.header} ${isScrollPoint && 'scrollHeader'}`}
      id="header"
    >
      <nav className={`${styles.nav} container`}>
        <a href="#" className={styles.nav__logo}>
          <LeafLineIcon className={styles.nav__logoIcon} size="1.7em" /> Arid
          Allure
        </a>

        <section
          className={`${styles.nav__menu} ${isOpen && styles.showMenu}`}
          id="nav-menu"
          ref={menuRef}
        >
          <ul className={styles.nav__list}>
            {menuItems.map((item) => (
              <li key={item} className={styles.nav__item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`${styles.nav__link} ${
                    activeLink === item && styles.activeLink
                  }`}
                  onClick={() => handleOnClickLink(item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <CloseLineIcon
            className={styles.nav__close}
            onClick={handleOnClickClose}
            id="nav-close"
          />
        </section>

        <section className={styles.nav__btns}>
          {isDark ? (
            <SunLineIcon
              className={styles.changeTheme}
              size={20}
              onClick={handleOnClickTheme}
            />
          ) : (
            <MoonLineIcon
              className={styles.changeTheme}
              size={20}
              onClick={handleOnClickTheme}
            />
          )}

          <MenuLineIcon
            className={styles.nav__toggle}
            id="nav-toggle"
            size="1.4rem"
            onClick={handleOnClickOpen}
          />
        </section>
      </nav>
    </header>
  );
};

export default Header;
