import AsyncStorage from '@react-native-community/async-storage';
import { databaseConstants } from '../constants' 
export class LocalDB {

    
    public storeData = async(data:any) => {

        try {

            await AsyncStorage.setItem(databaseConstants.lastPosition, JSON.stringify(data))
            return true
        } catch (e) {
            console.error("error storing data to local db: ", e)
            return false
        }
    }

    public readData = async() => {
        try {
            const jsonValue = await AsyncStorage.getItem(databaseConstants.lastPosition)
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
            console.error("error reading data from local db: ", e)    
            return null
        }

    }
}