import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState:AppState = {
    name : "myportfolio",
    currentStack : ["TYPESCRIPT","REACT","MONGODB","NODEJS"],
    stackCounter : 0
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
        }
    }
});

export const {incCounter} = AppSlice.actions;
export default AppSlice.reducer;