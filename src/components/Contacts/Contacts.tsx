/* eslint jsx-a11y/label-has-associated-control: 0 */

import PhoneLineIcon from 'remixicon-react/PhoneLineIcon';
import MailLineIcon from 'remixicon-react/MailLineIcon';
import ArrowRightUpLineIcon from 'remixicon-react/ArrowRightUpLineIcon';

import styles from './Contacts.module.scss';

const Contacts = () => {
  return (
    <section className="section container" id="contact">
      <div className={`${styles.contact__container} grid`}>
        <div className={styles.contact__box}>
          <h2 className="section__title">
            Reach out to us today <br />
            via any of the given <br />
            information
          </h2>

          <div className={styles.contact__data}>
            <div className={styles.contact__information}>
              <h3 className={styles.contact__subtitle}>
                Call us for instant support
              </h3>
              <span className={styles.contact__description}>
                <PhoneLineIcon />
                +416 023 0492
              </span>
            </div>

            <div className={styles.contact__information}>
              <h3 className={styles.contact__subtitle}>Write us by Email</h3>
              <span className={styles.contact__description}>
                <MailLineIcon />
                arid-allure@gmail.com
              </span>
            </div>
          </div>
        </div>

        <form className={styles.contact__form}>
          <div className={styles.contact__inputs}>
            <div className={styles.contact__content}>
              <input
                placeholder=" "
                type="email"
                className={styles.contact__input}
              />
              <label className={styles.contact__label}>Email</label>
            </div>

            <div className={styles.contact__content}>
              <input placeholder=" " className={styles.contact__input} />
              <label className={styles.contact__label}>Subject</label>
            </div>

            <div
              className={`${styles.contact__content} ${styles.contact__area}`}
            >
              <textarea
                placeholder=" "
                id="message"
                name="message"
                className={styles.contact__input}
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="message" className={styles.contact__label}>
                Message
              </label>
            </div>
          </div>

          <button className="button button__flex" type="button">
            Send Message
            <ArrowRightUpLineIcon className="button__icon" size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
