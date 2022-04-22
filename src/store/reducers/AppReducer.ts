import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState:AppState = {
    name : "myportfolio"
}
export const AppSlice = createSlice({
    name : "AppSlice",
    initialState,
    reducers : {
        logState : (state) => {
            console.log(state);
        }
    }
});

export const {logState} = AppSlice.actions;
export default AppSlice.reducer;