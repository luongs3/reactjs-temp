import { createBrowserRouter } from "react-router-dom";
import HomePage from "./homepage/HomePage";
import PostList from "./post/PostList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  }, {
    path: "/posts",
    element: <PostList />,
  },
]);

export default router
