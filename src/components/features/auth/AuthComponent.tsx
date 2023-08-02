import * as React from "react";
import * as ReactRouter from "react-router-dom"
import Modal from "react-modal";
import "./Auth.css"
import { AuthService } from "../../../services/AuthService";

export default function Auth({tipo, children, className}: any){
    document.title = `${tipo} - TravelBike`

    const [email, setEmail] = React.useState('')
    const [senha, setSenha] = React.useState('')
    const [isOpenModal, setIsOpenModal] = React.useState(false)

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        if(tipo == "cadastrar"){
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
        <>
            <Modal 
                isOpen={isOpenModal}
                className=""
                overlayClassName=""
                portalClassName=""
            >
                <h4>{tipo}</h4>
                <form className="absolute bottom-2/4 right-2/4 translate-x-2/4 translate-y-1/4 text-center text-white" onSubmit={handleSubmit}>
                    <input onChange={(event)=>{
                        setEmail(event.target.value)
                    }} type="text" name="formLogin" id="emailCredential" placeholder="email" />

                    <input onChange={(event)=>{
                        setSenha(event.target.value)
                    }} type="password" name="formLogin" id="email" placeholder="senha" />

                    <label htmlFor="Cadastrar">É cadastro?</label>

                    <input type="submit" value="cadastrar" />
                </form>
            </Modal>
            <button className={className} onClick={()=>{setIsOpenModal(!isOpenModal)}}>{children}</button>
        </>
    )
}


