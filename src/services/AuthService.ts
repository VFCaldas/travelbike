import * as FirebaseAuth from 'firebase/auth'
import { FirebaseService } from "./FirebaseService";

export class AuthService{

    private static auth = FirebaseService.getAuth()

    public static async isLogged(){
        let isLogged = false;
        await FirebaseAuth.onAuthStateChanged(this.auth, (user)=>{
            if (user) {
                isLogged = true
            }
        })

        return isLogged;
    }

    public static async createUser(email: string, password: string){
        return FirebaseAuth.createUserWithEmailAndPassword(this.auth, email, password)
    }

    public static async logIn(email: string, password: string){
        return FirebaseAuth.signInWithEmailAndPassword(this.auth, email, password)
    }

    public static async logOut(){
        FirebaseAuth.signOut(this.auth)
    }

}