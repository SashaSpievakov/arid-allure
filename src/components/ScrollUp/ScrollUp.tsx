import { useEffect, useState } from 'react';
import ArrowUpLineIcon from 'remixicon-react/ArrowUpLineIcon';

import styles from './ScrollUp.module.scss';

const ScrollUp = () => {
  const [isScrollPoint, setIsScrollPoint] = useState(false);

  useEffect(() => {
    const handleScrollCheck = () => {
      if (window.scrollY >= 400) {
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
    <a
      href="#"
      className={`${styles.scrollup} ${isScrollPoint && styles.showScroll}`}
      id="scroll-up"
    >
      <ArrowUpLineIcon className={styles.scrollup__icon} />
    </a>
  );
};

export default ScrollUp;
