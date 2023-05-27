import ArrowRightDownLineIcon from 'remixicon-react/ArrowRightDownLineIcon';
import CheckboxFillIcon from 'remixicon-react/CheckboxFillIcon';

import styles from './About.module.scss';
import imgSrc from '../../img/about.png';

const About = () => {
  return (
    <section className={`${styles.about} section container`} id="about">
      <div className={`${styles.about__container} grid`}>
        <img src={imgSrc} alt="About" className={styles.about__img} />

        <div className={styles.about__data}>
          <h2 className={`${styles.about__title} section__title`}>
            Who we really are & <br />
            why choose us
          </h2>

          <p className={styles.about__description}>
            We have over 4000+ unbiased reviews and our customers trust our
            plant process and delivery service every time
          </p>

          <div className={styles.about__details}>
            <p className={styles.about__detailsDescription}>
              <CheckboxFillIcon className={styles.about__detailsIcon} />
              We always deliver on time.
            </p>
            <p className={styles.about__detailsDescription}>
              <CheckboxFillIcon className={styles.about__detailsIcon} />
              We give you guides to protect and care for your plants.
            </p>
            <p className={styles.about__detailsDescription}>
              <CheckboxFillIcon className={styles.about__detailsIcon} />
              We always come over for a check-up after sale.
            </p>
            <p className={styles.about__detailsDescription}>
              <CheckboxFillIcon className={styles.about__detailsIcon} />
              100% money back guaranteed.
            </p>
          </div>

          <a href="#" className="button__link button__flex">
            Shop Now{' '}
            <ArrowRightDownLineIcon className="button__icon" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
