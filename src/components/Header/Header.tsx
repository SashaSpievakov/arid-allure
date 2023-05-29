import { useEffect, useState } from 'react';
import LeafLineIcon from 'remixicon-react/LeafLineIcon';
import CloseLineIcon from 'remixicon-react/CloseLineIcon';
import MoonLineIcon from 'remixicon-react/MoonLineIcon';
import MenuLineIcon from 'remixicon-react/MenuLineIcon';

import styles from './Header.module.scss';

const menuItems: string[] = ['Home', 'About', 'Products', 'FAQs', 'Contact'];

const Header = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isScrollPoint, setIsScrollPoint] = useState(false);

  const handleOnClickLink = (link: string) => {
    setActiveLink(link);
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

  return (
    <header
      className={`${styles.header} ${isScrollPoint && styles.scrollHeader}`}
      id="header"
    >
      <nav className={`${styles.nav} container`}>
        <a href="#" className={styles.nav__logo}>
          <LeafLineIcon className={styles.nav__logoIcon} size="1.7em" /> Arid
          Allure
        </a>

        <section className={styles.nav__menu} id="nav-menu">
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

          <CloseLineIcon className={styles.nav__close} id="nav-close" />
        </section>

        <section className={styles.nav__btns}>
          <MoonLineIcon
            className={styles.changeTheme}
            size="1.7rem"
            d="theme-button"
          />

          <MenuLineIcon
            className={styles.nav__toggle}
            id="nav-toggle"
            size="1.4rem"
          />
        </section>
      </nav>
    </header>
  );
};

export default Header;
