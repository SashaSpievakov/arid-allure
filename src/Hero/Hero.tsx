import ArrowRightDownLineIcon from 'remixicon-react/ArrowRightDownLineIcon';
import FacebookFillIcon from 'remixicon-react/FacebookFillIcon';
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon';
import TwitterFillIcon from 'remixicon-react/TwitterFillIcon';

import imgSrc from '../img/home.png';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={`${styles.hero__container} container grid`}>
        <img src={imgSrc} alt="Big plant" className={styles.hero__img} />

        <div className={styles.hero__data}>
          <h1 className={styles.hero__title}>
            Plants will make <br />
            your life better
          </h1>
          <p className={styles.hero__description}>
            Create incredible plant design for your offices or apastaments. Add
            fresness to your new ideas.
          </p>
          <a href="#about" className="button button__flex">
            Explore{' '}
            <ArrowRightDownLineIcon className="button__icon" size={18} />
          </a>
        </div>

        <div className={styles.hero__social}>
          <span className={styles.hero__socialFollow}>Follow Us</span>

          <div className={styles.hero__socialLinks}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className={styles.hero__socialLink}
            >
              <FacebookFillIcon />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className={styles.hero__socialLink}
            >
              <InstagramLineIcon />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className={styles.hero__socialLink}
            >
              <TwitterFillIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
