import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Header from "./Components/Header"
import Body  from "./Components/Body";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import AboutUs from "./Components/About";
import Contact from './Components/Contact'
import RestaurantDetails from "./Components/RestaurentDetails";
import UserClass from "./Components/userClass";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
     <Outlet />
    </div>
  );
};

const appRoute = createBrowserRouter([
  {path:'/',element:<AppLayout />,children:[
    {path:'/',element:<Body />},
    {path:'/about',element:<AboutUs />},
    {path:'/contact',element:<Contact />},
    {path:"/restaurentDetails/:id", element:<RestaurantDetails />},
    {path:"/profile", element:<UserClass />}
  ]},


  // {pa}
])
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={appRoute} />)
