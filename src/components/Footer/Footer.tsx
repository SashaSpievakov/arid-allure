import LeafLineIcon from 'remixicon-react/LeafLineIcon';
import ArrowRightUpLineIcon from 'remixicon-react/ArrowRightUpLineIcon';
import FacebookFillIcon from 'remixicon-react/FacebookFillIcon';
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon';
import TwitterFillIcon from 'remixicon-react/TwitterFillIcon';

import styles from './Footer.module.scss';
import imgSrc1 from '../../img/card1.png';
import imgSrc2 from '../../img/card2.png';
import imgSrc3 from '../../img/card3.png';
import imgSrc4 from '../../img/card4.png';

const Footer = () => {
  return (
    <footer className={`${styles.footer} section`}>
      <div className={`${styles.footer__container} container grid`}>
        <div className={styles.footer__content}>
          <a href="#" className={styles.footer__logo}>
            <LeafLineIcon className={styles.footer__logoIcon} size="1.7em" />{' '}
            Arid Allure
          </a>

          <h3 className={styles.footer__title}>
            Subscribe to our newsletter <br />
            to stay update
          </h3>

          <div className={styles.footer__subscribe} id="footer-subscribe">
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.footer__input}
            />

            <button
              type="button"
              className={`${styles.footer__button} button button__flex`}
            >
              Subscribe
              <ArrowRightUpLineIcon size={18} className="button__icon" />
            </button>
          </div>
        </div>

        <div className={styles.footer__content}>
          <h3 className={styles.footer__title}>Our Address</h3>

          <ul className={styles.footer__data}>
            <li className={styles.footer__information}>2049 - Canada</li>
            <li className={styles.footer__information}>Dakinson St. - 3253</li>
            <li className={styles.footer__information}>420-523-032</li>
          </ul>
        </div>

        <div className={styles.footer__content}>
          <h3 className={styles.footer__title}>Contact Us</h3>

          <ul className={styles.footer__data}>
            <li className={styles.footer__information}>+1 416 023 0492</li>

            <div className={styles.footer__social}>
              <a
                href="https://www.facebook.com/"
                className={styles.footer__socialLink}
              >
                <FacebookFillIcon />
              </a>
              <a
                href="https://www.instagram.com/"
                className={styles.footer__socialLink}
              >
                <InstagramLineIcon />
              </a>
              <a
                href="https://twitter.com/"
                className={styles.footer__socialLink}
              >
                <TwitterFillIcon />
              </a>
            </div>
          </ul>
        </div>

        <div className={styles.footer__content}>
          <h3 className={styles.footer__title}>We accept all credit cards</h3>

          <div className={styles.footer__cards}>
            <img src={imgSrc1} alt="card one" className={styles.footer__card} />
            <img src={imgSrc2} alt="card two" className={styles.footer__card} />
            <img
              src={imgSrc3}
              alt="card three"
              className={styles.footer__card}
            />
            <img
              src={imgSrc4}
              alt="card four"
              className={styles.footer__card}
            />
          </div>
        </div>
      </div>

      <p className={styles.footer__copy}>&#169; Sasha S. All rigths reserved</p>
    </footer>
  );
};

export default Footer;
