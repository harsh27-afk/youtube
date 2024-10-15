import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        threeLine:true,
    },
    reducers:{
        toggle:(state)=>{
            state.threeLine=!state.threeLine;
        },
        closeSidebar:(state)=>{
            state.threeLine=false;
        }
    }
})


export const {toggle,closeSidebar} = appSlice.actions;
export default appSlice.reducer;