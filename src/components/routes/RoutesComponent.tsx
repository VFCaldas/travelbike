import * as ReactRouter from "react-router-dom";

import Layout from "../layout/LayoutComponent";
import Servicos from "../features/servicos/ServicosComponent";
import Sobre from "../features/sobre/SobreComponent";
import Login from "../features/login/LoginComponent";
import Error404 from "../shared/error404/Error404";
import { AuthService } from "../../services/AuthService";

/**
 * Component para listar todas as rotas do TravelBike
 */
export default function RoutesComponent(){
    
    const router = ReactRouter.createBrowserRouter(
        [
            {
                element: <Layout/>,
                children: [
                    {path:"/", element:<ReactRouter.Navigate to={"inicio"}/>},
                    {path:"inicio", element:<p>Pagina inicial</p>},
                    {path:"servicos", element: <Servicos/>, loader: auth},
                    {path:"sobre", element:<Sobre/>, loader: auth},
                    {path:"contato", element: <p>Pagina de contatos</p>},
                    {path:"login", element: <Login/>}
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
        return ReactRouter.redirect("/login")
    }
    alert("usuario não logado")
    return null
}