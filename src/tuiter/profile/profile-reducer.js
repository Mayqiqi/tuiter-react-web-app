import profile from './profile.json';


const profileReducer = (state = profile, action) => {
    switch (action.type) {
        case "edit-profile":
            return {...state, profile};
        default:
            return state;
    }
};

export default profileReducer;
