import * as React from "react";
import * as ReactRouter from "react-router-dom"
import "./Login.css"
import { AuthService } from "../../../services/AuthService";

export default function Login(){
    const [email, setEmail] = React.useState('')
    const [senha, setSenha] = React.useState('')
    const [isCadastrar, setIsCadastrar] = React.useState(false)

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        if(isCadastrar){
            AuthService.createUser(email,senha).then((userCredential)=>{
                if(userCredential){
                    alert("usuario cadastrado")
                    ReactRouter.redirect("")
                }
            })
        }else{
            AuthService.logIn(email, senha).then((userCredential)=>{
                if(userCredential){
                    alert("usuario logado")
                    ReactRouter.redirect("")
                }
            }).catch(()=>{
                alert("erro ao fazer o login")
            })
        }
        
    }


    return(
        <form className="" onSubmit={handleSubmit}>
            <input onChange={(event)=>{
                setEmail(event.target.value)
            }} type="text" name="formLogin" id="emailCredential" placeholder="email" />

            <input onChange={(event)=>{
                setSenha(event.target.value)
            }} type="password" name="formLogin" id="email" placeholder="senha" />

            <label htmlFor="Cadastrar">É cadastro?</label>
            <input onChange={(event)=>{
                setIsCadastrar(event.target.checked)
            }}  type="checkbox" name="formLogin" id="Cadastrar" />

            <input type="submit" value="cadastrar" />
        </form>
        
    )
}


