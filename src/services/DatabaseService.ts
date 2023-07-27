import * as FirebaseDB from 'firebase/database'
import { FirebaseService } from './FirebaseService'

export class DatabaseService{

    private static database: FirebaseDB.Database = FirebaseService.getDatabase()

    public static insert(doc: any, path: string): void{
        FirebaseDB.set(
            FirebaseDB.ref(this.database, path), 
            doc
        )
    }

    public static select(path: string, constraints: FirebaseDB.QueryConstraint[] = []): Promise<FirebaseDB.DataSnapshot>{

        const query: FirebaseDB.Query =FirebaseDB.query(
            FirebaseDB.ref(this.database, path),
            ...constraints
        )
        
        return FirebaseDB.get(query);
    }

    public static update(doc: any ,path: string): void{
        FirebaseDB.update(
            FirebaseDB.ref(this.database, path),
            doc
        )
    }

    public static delete(path: string){
        FirebaseDB.remove(
            FirebaseDB.ref(this.database, path)
        )
    }

}