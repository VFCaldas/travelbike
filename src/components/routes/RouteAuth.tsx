import { Navigate } from "react-router-dom";


export default function RouteAuth({children}: any){
    console.log("Entrei no componente")
    let isLogged: boolean = false
    if(isLogged){
        return(children)
    }else{
        alert("Para acessar essa função voce precisa estar logado")
        return(<Navigate to={"/login"}/>)
    }

}