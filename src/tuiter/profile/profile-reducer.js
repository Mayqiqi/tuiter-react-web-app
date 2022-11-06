/*import profile from './profile.json';


const profileReducer = (state = profile, action) => {
    switch (action.type) {
        case "edit-profile":
            return {...state, profile};
        default:
            return state;
    }
};

export default profileReducer;*/
import profile from './profile.json';
import { createSlice } from "@reduxjs/toolkit";


const profileSlice = createSlice({
 name: 'profile',
 initialState: profile,
 reducers: {
  updateProfile(state, action) {
    return state = action.payload;
  }

 }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;

