import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Post } from "../../types/types";
import styles from "./Post.module.css";

export const PostPage: FC = () => {
  const location = useLocation();
  const id = location.pathname;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [author, setAuthor] = useState<string | null>(null);

  useEffect(() => {
    const getPost = async () => {
      setLoading(true);

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await response.json();

      const authorResponse = await fetch(
        `https://jsonplaceholder.typicode.com/users/${data.userId}`
      );
      const author = await authorResponse.json();

      setAuthor(author.name);
      setPost(data);
      setLoading(false);
    };
    getPost();
  }, []);

  if (loading) return <>Loading...</>;
  return (
    <div className={styles.post_container}>
      <div className={styles.post_root}>
        <h1 className={styles.post}> {post?.title}</h1>
        <br />
        <h4 className={styles.post}> {post?.body}</h4>
        <br />
        <h5 className={styles.post}>{author}</h5>
      </div>
    </div>
  );
};
