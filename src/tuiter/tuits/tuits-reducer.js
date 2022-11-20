import tuits from './tuits.json';
import { createSlice } from "@reduxjs/toolkit";
import {updateTuitThunk, createTuitThunk,deleteTuitThunk, findTuitsThunk}
  from "../../services/tuits-thunks";

const initialState = {
   tuits: [],
   loading: false
}


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
 initialState,
  extraReducers: {
    [findTuitsThunk.pending]:
       (state) => {
          state.loading = true
          state.tuits = []
    },
    [findTuitsThunk.fulfilled]:
       (state, { payload }) => {
          state.loading = false
          state.tuits = payload
    },
    [findTuitsThunk.rejected]:
       (state) => {
          state.loading = false
    },

    [deleteTuitThunk.fulfilled] :
          (state, { payload }) => {
          state.loading = false
          state.tuits = state.tuits
            .filter(t => t._id !== payload)
          },
    [createTuitThunk.fulfilled]:
          (state, { payload }) => {
            state.loading = false
            state.tuits.push(payload)
        },
    [updateTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        const tuitNdx = state.tuits
          .findIndex((t) => t._id === payload._id)
        state.tuits[tuitNdx] = {
          ...state.tuits[tuitNdx],
          ...payload
        }
      }



  },

});

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;
