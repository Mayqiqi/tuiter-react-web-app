import React from "react";
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const PostItem = (
   {
       post={
         icon:"./images/elonmusk.jpg",
         username:"Elon Musk",
         handle:"@elonmusk",
         time: "23h",
         title: "Amazing show about @Inspiration4x mission!",
         image: "../images/elonmusk.jpeg",
         topic: "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
         text: "From training to launch to landing, this all-access docuseries rides along with the Inspration4 crew on the first all-civillian orbital space...",
         link: "",
         message:"4.2k",
         retweet:"3.5k",
         love:"37.5k"
       }
   }
) => {
  return(
    <>
      <div className="wd-grid-image-left">
          <img className="wd-avatar-image" src={`./images/${post.icon}`}/>
      </div>

      <div className="wd-tuit">
          <div className="wd-tuit-heading">
              <div className="wd-tuit-authorname">
                {post.userName} <i className="fa-solid fa-circle-check"></i><span className="wd-tuit-handle"> {post.handle}</span> <span className="wd-tuit-time"> {post.time}</span>
              </div>
          </div>

          <div className="wd-tuit-content">
              <div className="wd-tuit-content-text">
              {post.title}
              </div>

              <div className="card wd-bg-color-card wd-postlist" >
                  <img src={`./images/${post.image}`} className="card-img-top wd-tuit-content-image" />

                  <div className="card-body pt-0 pb-0">
                      {post.topic ?
                      <div className="wd-tuit-content-bottom-title">
                              {post.topic}
                          </div> : ""}

                      {post.text ?
                      <div className="wd-tuit-content-bottom-text pt-1 pb-1">
                              {post.text}
                          </div> : ""}

                  </div>

              </div>


              <div className="wd-grid-icon-num-bottom">
                  <div className="wd-grid-icon-num-bottom-1">
                      <a className="wd-link_noline" href="#" ><i className="far fa-comment" ></i><span className="wd-grid-icon-num-bottom-num">{post.message}</span></a>
                  </div>
                  <div className="wd-grid-icon-num-bottom-1">
                      <a className="wd-link_noline" href="#" ><i className="fa fa-retweet" ></i><span className="wd-grid-icon-num-bottom-num">{post.retweet}</span></a>
                  </div>
                  <div className="wd-grid-icon-num-bottom-1">
                      <i class="far fa-heart" ></i><a className="wd-link_noline" href="#" ><span className="wd-grid-icon-num-bottom-num">{post.love}</span></a>
                  </div>
                  <div className="wd-grid-icon-num-bottom-1">
                      <a className="wd-link_noline" href="#" ><i className="fa fa-share"></i></a>
                  </div>
              </div>
          </div>
      </div>
  </>
  );

};
export default PostItem;