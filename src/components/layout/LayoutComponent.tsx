import { Outlet } from "react-router-dom";

import Header from "./header/HeaderComponent"
import Footer from "./footer/FooterComponent";

import "./Layout.css"

export default function Layout() {
    
    return (
        <>
            <Header/>
            <div id="conteudo" >
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
}