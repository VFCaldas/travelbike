import { Link } from "react-router-dom";
import "./Header.css"
import { AuthService } from "../../../services/AuthService";

export default function Header(){
    const isLogged = false
    
    let link = <Link to={"login"}>login</Link>
    if(isLogged){
        link = <Link to={"perfil"}>nome do usuario</Link>
    }

    return(
        <header className="absolute top-0 w-full flex justify-end text-white px-10 py-8">
            <ul className="flex justify-between">
                <li className="mx-3.5">
                    <Link to={"inicio"}>Inicio</Link>
                </li>
                <li className="mx-3.5">
                    <Link to={"servicos"}>Serviços</Link>
                </li>
                <li className="mx-3.5">
                    <Link to={"sobre"}>Sobre</Link>
                </li>
                <li className="mx-3.5">
                    <Link to={"contato"}>Contato</Link>
                </li>
                <li className="mx-3.5">
                    {link}
                </li>
                <li className="mx-3.5">
                    <Link to={"teste"}>Teste</Link>
                </li>
            </ul>
            <button onClick={()=>{AuthService.logOut()}} >LogOut</button>
        </header>
    )
}