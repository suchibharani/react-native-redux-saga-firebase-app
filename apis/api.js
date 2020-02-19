import { AsyncStorage } from 'react-native';
import Data from '../data/quotes.json';
import { retry } from 'redux-saga/effects';

const getQuotesAsyncStorage = async () => {
        //Check if any data exist
        // await AsyncStorage.clear();
        try{
            let newdata = await AsyncStorage.getItem('data', (err, data) => {
                //if it doesn't exist, extract from json file
                //save the initial data in Async
                
                if (data === null){
                    console.log("data not available")
                    AsyncStorage.setItem('data', JSON.stringify(Data.quotes));
                }else{
                    console.log("data is available")
                }
            });
            let result = await newdata;
            return result;
        }catch(err){
            return new Error("helle");
        }
        
};


export {
    getQuotesAsyncStorage
};