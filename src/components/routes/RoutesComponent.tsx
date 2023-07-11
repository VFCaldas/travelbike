import * as ReactRouter from "react-router-dom";

import Layout from "../layout/LayoutComponent";
import Servicos from "../features/servicos/ServicosComponent";
import Sobre from "../features/sobre/SobreComponent";
import Login from "../features/login/LoginComponent";
import RouteAuth from "./RouteAuth";

/**
 * Component para listar todas as rotas do TravelBike
 */
export default function RoutesComponent(){
    
    const router = ReactRouter.createBrowserRouter(
        ReactRouter.createRoutesFromElements(
            <ReactRouter.Route element={<Layout/>}>
                <ReactRouter.Route path="/" element={<ReactRouter.Navigate to={"inicio"}/>}/>
                <ReactRouter.Route path="inicio" element={<p>Pagina inicial</p>} ></ReactRouter.Route>
                <ReactRouter.Route path="servicos" element={<Servicos/>} ></ReactRouter.Route>
                <ReactRouter.Route path="sobre" element={<Sobre/>} ></ReactRouter.Route>
                <ReactRouter.Route path="contato" element={<p>Pagina de contatos</p>} ></ReactRouter.Route>
                <ReactRouter.Route path="login" element={<Login/>} ></ReactRouter.Route>
                <ReactRouter.Route 
                    path="teste" 
                    element={
                        <RouteAuth>
                            <Servicos/>
                        </RouteAuth>
                    } >

                </ReactRouter.Route>
            </ReactRouter.Route>
        )
    );

    return(<ReactRouter.RouterProvider router={router} />)
}