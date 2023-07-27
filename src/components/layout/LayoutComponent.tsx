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
                <h2>VIVA AVENTURA</h2>
            </section>
            <div id="conteudo" >
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
}