import {NextUIProvider} from "@nextui-org/react";
import NavbarMenu from "./componentes/NavbarMenu";
import Pie from "./componentes/Pie";
import ModalDetalleProducto from "./componentes/ModalDetalleProducto";
import { Route, Routes, Link } from "react-router-dom";



function App() {
    //----------------------------------------------------------------------------
    return (
    
      <NextUIProvider>
        <Routes>
          <Route path='/' element={<NavbarMenu />} />
        </Routes>
        <ModalDetalleProducto><Link to = '/'></Link></ModalDetalleProducto>
        <Pie><Link to = '/'></Link></Pie>
      </NextUIProvider>
    
  )
}

export default App
