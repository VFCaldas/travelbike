import { Outlet } from "react-router-dom";

import Header from "./header/HeaderComponent"
import Footer from "./footer/FooterComponent";

import "./Layout.css"

export default function Layout() {
    
    return (
        <>
            <section>
                <Header/>
                <h1 >TRAVEL BIKE</h1>
                <p>VIVA AVENTURA</p>
            </section>
            <div id="conteudo" >
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
}