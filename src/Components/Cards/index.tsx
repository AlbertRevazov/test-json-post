import { FC } from "react";
import { Post } from "../../types/types";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

type CardProps = {
  posts: Post[];
};

export const Card: FC<CardProps> = ({ posts }) => {
  return (
    <div className={styles.cards_root}>
      {posts?.map((post) => (
        <Link to={`${post.id}`}>
          <h3 key={post.id} className={styles.cards_item}>
            <blockquote className={styles.blockquote_post}>
              <cite>{post.title}</cite>
              <br />
              {post.body}
            </blockquote>
          </h3>
        </Link>
      ))}
    </div>
  );
};
