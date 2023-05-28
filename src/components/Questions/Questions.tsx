import styles from './Questions.module.scss';
import Question from './Question/Question';

const titlesArr1: string[] = [
  'My flowers are falling off or dying?',
  'What causes leaves to become pale?',
  'What causes brown crispy leaves?',
];

const titlesArr2: string[] = [
  'How do i choose a plant?',
  'How do I change the pots?',
  'Why are gnats flying around my plant?',
];

const Questions = () => {
  return (
    <section className={`${styles.questions} section`} id="faqs">
      <h2
        className={`${styles.questions__title} section__title_centered container`}
      >
        Some common questions <br />
        were&apos;re often asked
      </h2>

      <div className={`${styles.questions__container} container grid`}>
        <div className={styles.questions__group}>
          {titlesArr1.map((title) => (
            <Question title={title} key={title} />
          ))}
        </div>

        <div className={styles.questions__group}>
          {titlesArr2.map((title) => (
            <Question title={title} key={title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
