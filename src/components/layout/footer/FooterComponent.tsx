import twitterLogo from "../../../assets/images/icons/twitter-logo.svg"
import instagramLogo from "../../../assets/images/icons/instagram-logo.svg"
import whatsappLogo from "../../../assets/images/icons/whatsapp-logo.svg"
import facebookLogo from "../../../assets/images/icons/facebook-logo.svg"

export default function Footer(){
    return(
        <footer className="text-white shadow-inner">
            <div className="bg-amber-600 grid grid-cols-4 h-64 p-8">
                <div>
                    <div className="text-center ">
                        <h5 className="underline underline-thickness underline-offset-8">TRAVEL BIKE</h5>
                        <p>VIVA AVENTURA</p>
                    </div>
                </div>
                <div>
                    <p className="subtitle">Serviços</p>
                    <ul>
                        <li>login</li>
                        <li>cadastrar</li>
                        <li>inventario</li>
                    </ul>
                </div>
                <div>
                    <p className="subtitle">Sobre</p>
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <p className="subtitle">Contato</p>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
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