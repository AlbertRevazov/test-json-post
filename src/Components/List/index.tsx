import { FC, useEffect, useState } from "react";
import { Post } from "../../types/types";
import { Card } from "../Cards";
import { Pagination } from "../Pagination";

export const List: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [countOnPage] = useState<number>(10);

  const lastIndex = currentPage * countOnPage;
  const firstIndex = lastIndex - countOnPage;
  const currentPosts = posts?.slice(firstIndex, lastIndex);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    };
    getData();
  }, []);

  return (
    <>
      <Card posts={currentPosts} />
      <Pagination
        countOnPage={countOnPage}
        totalPosts={posts.length}
        onChange={setCurrentPage}
        current={currentPage}
      />
    </>
  );
};
