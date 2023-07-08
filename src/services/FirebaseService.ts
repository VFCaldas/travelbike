import * as FirebaseAppObj from 'firebase/app'
import * as FirebaseDB from 'firebase/database'

import { firebaseConfig } from '../environment/environment'

export class FirebaseService {
    
    private static app = FirebaseAppObj.initializeApp(firebaseConfig);

    public static getDatabase(): FirebaseDB.Database{
        return FirebaseDB.getDatabase(this.app)
    }

}