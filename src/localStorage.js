
// Load State Function
export const loadState = () => {
    try{
        const serializedState = localStorage.getItem('state');
        console.log(serializedState)
        if( serializedState === null ){
            return undefined;
        }
        return JSON.parse(serializedState)
    }
    catch (err) {
        return undefined;
    }
}

// Save State Function
export const saveState = (state) => {
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    }
    catch (err) {
        // ignore write errors
    }
}