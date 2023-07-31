import twitterLogo from "../../../assets/images/icons/twitter-logo.svg"
import instagramLogo from "../../../assets/images/icons/instagram-logo.svg"
import whatsappLogo from "../../../assets/images/icons/whatsapp-logo.svg"
import facebookLogo from "../../../assets/images/icons/facebook-logo.svg"

import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer className="text-white shadow-inner">
            <div className="bg-amber-600 grid grid-cols-4 h-72 py-8">
                <div>
                    <div className="text-center ">
                        <h5 className="underline underline-thickness underline-offset-8">TRAVEL BIKE</h5>
                        <p className="text-xl mt-1" >VIVA AVENTURA</p>
                    </div>
                </div>
                <div>
                    <p className="subtitle mb-7">Serviços</p>
                    <ul>
                        <li className="mb-6">
                            <Link  to={"/login"}>login</Link>
                        </li>
                        <li className="mb-6">
                            <Link  to={"/cadastrar"}>cadastrar</Link>
                        </li>
                        <li className="mb-6">
                            <Link  to={"/servicos/inventario"}>inventario</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="subtitle mb-7">Sobre</p>
                    <ul>
                        <li className="mb-6">
                            <Link  to={"/sobre/comunidade"}>Comunidade</Link>
                        </li>
                        <li className="mb-6">
                            <Link  to={"/sobre/seja-colaborador"}>Seja um colaborador</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="subtitle mb-7">Contato</p>
                    <ul>
                        <li className="mb-6">
                            <Link  to={"/contatos"}>Contate-nos</Link>
                        </li>
                        <li className="mb-6">
                            <Link  to={"/contatos#termos"}>Termos</Link>
                        </li>
                        <li className="mb-6">
                            <Link  to={"/contatos#privacidade"}>Políticas de privacidade</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-black flex justify-between px-20 py-10 items-center">
                <p>2023&copy; TravelBike Alguns Direitos Reservados</p>
                <div className="flex">
                    <a>
                        <img className="h-12 mx-4" src={twitterLogo} alt="twitter" />
                    </a>
                    <a>
                        <img className="h-12 mx-4" src={instagramLogo} alt="instagram" />
                    </a>
                    <a>
                        <img className="h-12 mx-4" src={whatsappLogo} alt="whatsapp" />
                    </a>
                    <a>
                        <img className="h-12 mx-4" src={facebookLogo} alt="facebook" />
                    </a>
                </div>
            </div>
        </footer>
    )
}