import styles from './Steps.module.scss';

const Steps = () => {
  return (
    <section className={`${styles.steps} section container`}>
      <div className={styles.steps__bg} id="steps-bg">
        <h2 className={`${styles.steps__title} section__title_centered`}>
          Steps to start your <br />
          plants off right
        </h2>

        <div className={`${styles.steps__container} grid`}>
          <div className={styles.steps__card}>
            <div className={styles.steps__cardNumber}>01</div>
            <h3 className={styles.steps__cardTitle}>Choose Plant</h3>
            <p className={styles.steps__cardDescription}>
              We have several varieties plants you can choose from.
            </p>
          </div>

          <div className={styles.steps__card}>
            <div className={styles.steps__cardNumber}>02</div>
            <h3 className={styles.steps__cardTitle}>Place an order</h3>
            <p className={styles.steps__cardDescription}>
              Once your order is set, we move to the next step which is the
              shipping.
            </p>
          </div>

          <div className={styles.steps__card}>
            <div className={styles.steps__cardNumber}>03</div>
            <h3 className={styles.steps__cardTitle}>Get plants delivered</h3>
            <p className={styles.steps__cardDescription}>
              Our delivery process is easy, you receive the plant direct to your
              door.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
