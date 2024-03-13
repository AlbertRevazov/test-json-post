import React, { FC } from "react";
import styles from "./Pagination.module.css";

type PaginationProps = {
  countOnPage: number;
  totalPosts: number;
  current: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
};

export const Pagination: FC<PaginationProps> = ({
  countOnPage,
  totalPosts,
  current,
  onChange,
}) => {
  const pages: number[] = [];
  const numberOfPages = Math.round(totalPosts / countOnPage);

  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }

  const prev = () =>
    onChange((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return 1;
    });

  const next = () =>
    onChange((prev) => {
      if (prev < pages.length) return prev + 1;
      return pages.length;
    });

  return (
    <div className={styles.pagination_root}>
      <button
        onClick={prev}
        className={styles.pagination_btn}
        disabled={current < 2}
      >
        <i className="bx bx-chevron-left"></i>
      </button>

      {pages.map((num, idx) => (
        <h3
          key={num}
          className={idx === current - 1 ? styles.active : styles.item}
          onClick={() => onChange(num)}
        >
          {num}
        </h3>
      ))}
      <button
        onClick={next}
        className={styles.pagination_btn}
        disabled={current === pages.length}
      >
        <i className="bx bx-chevron-right"></i>
      </button>
    </div>
  );
};
