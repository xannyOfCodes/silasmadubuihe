import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import Home from "./pages/Home"
import PageNotFound from "./components/PageNotFound"
import Error from "./components/Error"

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>} errorElement={<Error/>}>
        <Route index element={<Home/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
