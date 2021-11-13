import {  REVENUELIST } from "./actionTypes";


export const setRevenues = (revenues)=>{
    return{
        type:REVENUELIST,
        revenues:revenues
    }
}