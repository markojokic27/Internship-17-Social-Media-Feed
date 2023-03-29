import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route element={<Layout/>}>
      
    </Route>
    </>
  )
);
const Router = () => {
  return <RouterProvider router={router} />;
};
export default Router;
