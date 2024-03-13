import { Routes, Route } from "react-router-dom";
import { List } from "./Components/List";
import { PostPage } from "./Components/Post";
import "./App.css";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path=":id" element={<PostPage />} />
      <Route
        path="*"
        element={
          <div className="error">
            <h2>Ошибочка, нет такой страницы</h2>
          </div>
        }
      />
    </Routes>
  );
};
