import * as ReactRouter from "react-router-dom";

import Layout from "../layout/LayoutComponent";
import Servicos from "../features/servicos/ServicosComponent";
import Sobre from "../features/sobre/SobreComponent";
import Auth from "../features/auth/AuthComponent";
import Error404 from "../shared/error404/Error404";
import { AuthService } from "../../services/AuthService";
import Home from "../features/home/HomeComponent";

/**
 * Component para listar todas as rotas do TravelBike
 */
export default function RoutesComponent(){
    
    const router = ReactRouter.createHashRouter(
        [
            {
                element: <Layout/>,
                children: [
                    {path:"/", element:<ReactRouter.Navigate to={"inicio"}/>},
                    {path:"inicio", element:<Home/>},
                    {path:"servicos", element: <Servicos/>, loader: auth},
                    {path:"sobre", element:<Sobre/>, loader: auth},
                    {path:"contato", element: <p>Pagina de contatos</p>},
                ]
            },
            {path:"*", element:<Error404/>}
        ]
    )
    

    return(<ReactRouter.RouterProvider router={router} />)
}

async function auth(){
    const isLogged = await AuthService.isLogged()
    if (!isLogged) {
        alert("usuario não logado")
        return ReactRouter.redirect("/login")
    }
    
    return null
}