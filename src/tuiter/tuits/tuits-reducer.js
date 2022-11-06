import tuits from './tuits.json';
import { createSlice } from "@reduxjs/toolkit";

const currentUser = {
 "userName": "NASA",
 "handle": "@nasa",
 "image": "nasa.png",
};

const templateTuit = {
 ...currentUser,
 "topic": "Space",
 "time": "2h",
 "liked": false,
 "stats": {
       "replies":"123",
       "retuits":"234",
       "likes":"345"}
}


const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: tuits,
 reducers: {


   createTuit(state, action) {
     state.unshift({
       ...action.payload,
       ...templateTuit,
       _id: (new Date()).getTime(),
     })
   },
   deleteTuit(state, action) {
           const index = state
              .findIndex(tuit =>
                 tuit._id === action.payload);
           state.splice(index, 1);
   }

 }
});

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;
