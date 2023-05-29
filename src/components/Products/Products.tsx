import ShoppingBagLineIcon from 'remixicon-react/ShoppingBagLineIcon';

import styles from './Products.module.scss';
import src1 from '../../img/product1.png';
import src2 from '../../img/product2.png';
import src3 from '../../img/product3.png';
import src4 from '../../img/product4.png';
import src5 from '../../img/product5.png';
import src6 from '../../img/product6.png';

const Products = () => {
  return (
    <section className={`${styles.product} section container`} id="products">
      <h2 className="section__title_centered">
        Check out our <br />
        products
      </h2>

      <p className={styles.product__description}>
        Here are some selected plants from our showroom, all are in excellent
        shape and has a long life span. Buy and enjoy best quality.
      </p>

      <div className={`${styles.product__container} grid`}>
        <article className={styles.product__card}>
          <div className={`${styles.product__circle} product-circle`} />

          <img src={src1} alt="Cacti Plant" className={styles.product__img} />

          <h3 className={styles.product__title}>Cacti Plant</h3>
          <span className={styles.product__price}>$19.99</span>

          <button
            className={`${styles.product__button} button__flex`}
            type="button"
          >
            <ShoppingBagLineIcon />
          </button>
        </article>

        <article className={styles.product__card}>
          <div className={`${styles.product__circle} product-circle`} />

          <img src={src2} alt="Cactus Plant" className={styles.product__img} />

          <h3 className={styles.product__title}>Cactus Plant</h3>
          <span className={styles.product__price}>$11.99</span>

          <button
            className={`${styles.product__button} button__flex`}
            type="button"
          >
            <ShoppingBagLineIcon />
          </button>
        </article>

        <article className={styles.product__card}>
          <div className={`${styles.product__circle} product-circle`} />

          <img
            src={src3}
            alt="Aloe Vera Plant"
            className={styles.product__img}
          />

          <h3 className={styles.product__title}>Aloe Vera Plant</h3>
          <span className={styles.product__price}>$7.99</span>

          <button
            className={`${styles.product__button} button__flex`}
            type="button"
          >
            <ShoppingBagLineIcon />
          </button>
        </article>

        <article className={styles.product__card}>
          <div className={`${styles.product__circle} product-circle`} />

          <img
            src={src4}
            alt="Succulent Plant"
            className={styles.product__img}
          />

          <h3 className={styles.product__title}>Succulent Plant</h3>
          <span className={styles.product__price}>$5.99</span>

          <button
            className={`${styles.product__button} button__flex`}
            type="button"
          >
            <ShoppingBagLineIcon />
          </button>
        </article>

        <article className={styles.product__card}>
          <div className={`${styles.product__circle} product-circle`} />

          <img
            src={src5}
            alt="Succulent Plant"
            className={styles.product__img}
          />

          <h3 className={styles.product__title}>Succulent Plant</h3>
          <span className={styles.product__price}>$10.99</span>

          <button
            className={`${styles.product__button} button__flex`}
            type="button"
          >
            <ShoppingBagLineIcon />
          </button>
        </article>

        <article className={styles.product__card}>
          <div className={`${styles.product__circle} product-circle`} />

          <img src={src6} alt="Green Plant" className={styles.product__img} />

          <h3 className={styles.product__title}>Green Plant</h3>
          <span className={styles.product__price}>$8.99</span>

          <button
            className={`${styles.product__button} button__flex`}
            type="button"
          >
            <ShoppingBagLineIcon />
          </button>
        </article>
      </div>
    </section>
  );
};

export default Products;
