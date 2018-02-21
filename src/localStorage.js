
import storeData from './stores'

// Load State Function
export const loadState = () => {
    try{
        const serializedState = sessionStorage.getItem('state');
        if( serializedState === null ){
            return undefined;
        }
        else{
            if(serializedState !== storeData){
                const temp = {
                    ...storeData,
                    name: JSON.parse(serializedState).reduceProfileData.name
                }
                const newserializedState = {
                    reduceProfileData: temp
                }
                return newserializedState
            }
        }
    }
    catch (err) {
        return undefined;
    }
}

// Save State Function
export const saveState = (state) => {
    try{
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem('state', serializedState);
    }
    catch (err) {
        // ignore write errors
    }
}