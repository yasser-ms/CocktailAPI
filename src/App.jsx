import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  About,
  Cocktail,
  Newslatter,
  Landing,
  HomeLayout,
  Error,
  SinglePageError,
} from "./pages/index";
import { Loader as LandingLoader } from "./pages/Landing";
import { Loader as SingleCocktailLoader } from "./pages/Cocktail";
import {action as NewsletterAction} from './pages/Newslatter'
const Queryclient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: LandingLoader /*Fetch DATA */,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cocktail/:id",
        element: <Cocktail />,
        loader: SingleCocktailLoader,
        errorElement: <SinglePageError />,
      },
      {
        path: "/newsletter",
        element: <Newslatter />,
        action : NewsletterAction,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <QueryClientProvider client={Queryclient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
};
export default App;
