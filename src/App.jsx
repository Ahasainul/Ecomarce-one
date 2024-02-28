import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Routelayots />}>
     <Route path="/" element={<Home/>}/>
     <Route path="shop/" element={<Shop/>}/>
     <Route path="about/" element={<About/>}/>
     <Route path="Contacts/" element={<Contract/>}/>
     <Route path="Proudct" element={<Proudct/>}/>
     <Route path="login/" element={<Login/>}/>
     <Route path="counter/" element={<Counter/>}/>

    <Route path="*" element={<Errore/>}/>
    </Route>
  )
);

import './App.css'
import Naver from "./layots/Naver";
import Routelayots from "./layots/Routelayots";
import Banner from "./layots/Banner";
import BannerTow from "./layots/BannerTow";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Container from "./components/Container";
import Contract from "./pages/Contract";
import Proudct from "./pages/Proudct";
import Errore from "./pages/Errore";
import Login from "./pages/Login";
import Counter from "./components/Counter";

function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
