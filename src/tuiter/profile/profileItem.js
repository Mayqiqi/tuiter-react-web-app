import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';


const ProfileItem = () => {
    const profile = useSelector(state => state.profile);
    return (
          <>
            <div className="row mt-2">
                    <div className="col-1 flex">
                        <Link to="/tuiter" >
                            <i className="fas fa-arrow-left"/>
                        </Link>
                        </div>
                    <div className="col-11">
                        <h5 className="mb-0 wd-font-size-15">{profile.name}</h5>
                        <div className="mt=0 wd-font-size-10px">5,196 tuits</div>
                    </div>
            </div>


            <div className="position-relative mb-4">
                <div>
                    <img src={`./images/${profile.bannerPicture}`} className="wd-profile-banner"/>
                </div>
                <div className="d-flex justify-content-between px-3">
                    <div >
                        <img src={`./images/${profile.profilePicture}`} alt="" className="wd-profile-picture"/>
                    </div>
                    <div className="px-3">
                        <Link to="/tuiter/edit-profile"><button className="btn btn-outline-dark rounded-pill mt-2">Edit Profile</button></Link>
                    </div>
                </div>
            </div>

            <div className="px-3">
                <div className="mt-2">
                    <h5 className="mb-0">
                        {profile.name}
                    </h5>
                    <div className="wd-font-color-grey">{profile.handle}</div>
                </div>
                <div className="mt-2">{profile.bio}</div>
                <div className="mt-2 d-flex">
                    <div className="text-muted me-2">
                        <i className="fas fa-map-marker-alt align-self-center"></i>
                        <span className="align-self-center"> {profile.location}</span>
                    </div>
                    <div className="wd-font-color-grey me-2">
                        <i className="fas fa-birthday-cake align-self-center"></i>
                        <span className="align-self-center">  Born  { profile.dateOfBirth}</span>
                    </div>
                    <div className="wd-font-color-grey me-2">
                        <i className="far fa-calendar-alt align-self-center"></i>
                        <span className="align-self-center">  Joined {profile.dateJoined}</span>
                    </div>
                </div>
                <div className="d-flex mt-2">
                    <div className="me-2">
                        <span className="fw-bold wd-font-size-15">{profile.followingCount}</span>
                        <span className="wd-font-color-grey"> Following</span>
                    </div>
                    <div className="me-2">
                        <span className="fw-bold wd-font-size-15">{profile.followersCount}</span>
                        <span className="wd-font-color-grey"> Followers</span>
                    </div>
                </div>
            </div>
          </>

    );
};

export default ProfileItem;