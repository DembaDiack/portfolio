import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState:AppState = {
    name : "myportfolio",
    currentStack : ["TYPESCRIPT","REACT","MONGODB","NODEJS","REDUX"],
    stackCounter : 0,
    consoleOutput : []
}
export const AppSlice = createSlice({
    name : "AppSlice",
    initialState,
    reducers : {
        incCounter : (state) => {
            if(state.stackCounter == state.currentStack.length - 1)
            {
                state.stackCounter = 0;
            }
            else 
            {
                state.stackCounter++;
            }
        },
        appendOutput : (state,action:PayloadAction<JSX.Element>) => {
            state.consoleOutput.push(action.payload);
            document.querySelector("#outputarea")?.scroll({top : document.querySelector("#outputarea")?.scrollHeight});
        }
    }
});

export const {incCounter,appendOutput} = AppSlice.actions;
export default AppSlice.reducer;