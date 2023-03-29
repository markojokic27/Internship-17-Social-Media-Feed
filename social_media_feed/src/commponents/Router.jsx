import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import FeedPage from "../pages/FeedPage";
import NotFoundPage from "../pages/NotFoundPage";
import PostPage from "../pages/PostPage/PostPage";
import Layout from "./Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route path="/" element={<FeedPage />} />
        <Route path="/post">
          <Route index element={<FeedPage />} />
          <Route path=":postId" element={<PostPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </>
  )
);
const Router = () => {
  return <RouterProvider router={router} />;
};
export default Router;
