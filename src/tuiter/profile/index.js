import React, {useState, useEffect}  from "react";
import {useSelector, useDispatch} from "react-redux";
import ProfileItem from "./profileItem";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);

    const dispatch = useDispatch();

    const setNavActive = (active) => {
        return {
            type: "change-active",
            active,
        };
    };

    useEffect(() => {
        dispatch(setNavActive("Profile"));
    }, [dispatch]);

    return(
        <>
            <ProfileItem profile={profile}/>
        </>
    )
}
export default ProfileComponent;