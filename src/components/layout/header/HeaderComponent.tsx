import { Link } from "react-router-dom";
import "./Header.css"

export default function Header(){
    let isLogged: boolean = false
    
    let link = <Link to={"login"}>login</Link>
    if(isLogged){
        link = <Link to={"perfil"}>nome do usuario</Link>
    }

    return(
        <header>
            <ul>
                <li>
                    <Link to={"servicos"}>Serviços</Link>
                </li>
                <li>
                    <Link to={"sobre"}>Sobre</Link>
                </li>
                <li>
                    <Link to={"contato"}>Contato</Link>
                </li>
                <li>
                    {link}
                </li>
                <li>
                    <Link to={"teste"}>Teste</Link>
                </li>
            </ul>
        </header>
    )
}