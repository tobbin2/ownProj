import * as firebase from 'firebase'
import { IReqResults } from '../constants'

export class DbReq {
    
    realtimeDb = firebase.database()

    public uploadStatus = (city:string, id:string, status:string, location:any) => {
        let result:IReqResults

        return new Promise( (resolve) => {
            this.realtimeDb.ref(`Cities/${city}/${id}`).set({
                location,
                status
            }).then( ( docRef:any ) => {
                result.success = true
                result.response = docRef

                resolve(result)
            }).catch( ( error:any ) => {
                console.info("couldn't upload status: ", error)
                result.error = error
                result.success = false

                resolve(result)
            })
        })
    }
    

}