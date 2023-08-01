import { Link } from "react-router-dom";
import "./Header.css"
import { AuthService } from "../../../services/AuthService";
import Auth from "../../features/auth/AuthComponent";

export default function Header(){
    const isLogged = false
    
    const link = <Auth tipo={"login"} >Login</Auth>                

    // if(isLogged){
    //     link = <Link className="text-2xl" to={"perfil"}>nome do usuario</Link>
    // }
    
    return(
        <header className="absolute top-0 w-full flex justify-end text-white px-10 py-8 text-2xl">
            <ul className="flex justify-between navbar">
                <li className="mx-3.5">
                    <Link className="text-2xl" to={"inicio"}>Inicio</Link>
                </li>
                <li className="mx-3.5">
                    <Link className="text-2xl" to={"servicos"}>Serviços</Link>
                </li>
                <li className="mx-3.5">
                    <Link className="text-2xl" to={"sobre"}>Sobre</Link>
                </li>
                <li className="mx-3.5">
                    <Link className="text-2xl" to={"contato"}>Contato</Link>
                </li>
                <li className="mx-3.5">
                    {link}
                </li>
            </ul>
            <button onClick={()=>{AuthService.logOut()}} >LogOut</button>
        </header>
    )
}