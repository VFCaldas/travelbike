import * as ReactRouter from "react-router-dom";
import Inicio from "../inicio/InicioComponent";

/**
 * Component para listar todas as rotas do TravelBike
 */
export default function RoutesComponent(){
    

    return(
        <>  
            <ReactRouter.BrowserRouter>
                <ReactRouter.Routes>
                    <ReactRouter.Route path="/" element={ <ReactRouter.Navigate to={"inicio"} /> } ></ReactRouter.Route>
                    <ReactRouter.Route path="inicio" element={<Inicio/>} ></ReactRouter.Route>

                </ReactRouter.Routes>
            </ReactRouter.BrowserRouter>
        </>
    )
} 