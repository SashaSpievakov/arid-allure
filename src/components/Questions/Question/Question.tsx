import React, { useRef, useState } from 'react';
import AddLineIcon from 'remixicon-react/AddLineIcon';

import styles from '../Questions.module.scss';

interface QuestionProps {
  title: string;
}

const Question: React.FC<QuestionProps> = ({ title }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleOnClick = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`${styles.questions__item} ${open && styles.accordion_open}`}
    >
      <header
        className={styles.questions__header}
        tabIndex={0}
        role="button"
        onClick={handleOnClick}
        onKeyDown={handleOnClick}
      >
        <AddLineIcon className={styles.questions__icon} size={22} />
        <h3 className={styles.questions__itemTitle}>{title}</h3>
      </header>

      <div
        ref={contentRef}
        className={styles.questions__content}
        style={open ? { height: `${contentRef.current?.scrollHeight}px` } : {}}
      >
        <p className={styles.questions__description}>
          Plants are easy way to add color energy and transform your space but
          which planet is for you. Choosing the right plant.
        </p>
      </div>
    </div>
  );
};

export default Question;
