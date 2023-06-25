import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.list}>
      <li className={css.listItem}>
        Good: <span>{good}</span>
      </li>
      <li className={css.listItem}>
        Neutral: <span>{neutral}</span>
      </li>
      <li className={css.listItem}>
        Bad: <span>{bad}</span>
      </li>
      <li className={css.listItem}>
        Total: <span>{total}</span>
      </li>
      <li className={css.listItem}>
        Positive feedback: <span>{positivePercentage}</span>
      </li>
    </ul>
  );
};
