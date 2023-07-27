import * as FirebaseAppObj from 'firebase/app'
import * as FirebaseDB from 'firebase/database'
import * as FirebaseAuth from 'firebase/auth'

import { firebaseConfig } from '../environment/environment'

export class FirebaseService {
    
    private static app = FirebaseAppObj.initializeApp(firebaseConfig);

    public static getDatabase(): FirebaseDB.Database{
        return FirebaseDB.getDatabase(this.app)
    }

    public static getAuth(){
        return FirebaseAuth.getAuth(this.app)
    }

}