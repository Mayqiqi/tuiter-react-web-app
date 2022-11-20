import {useDispatch} from "react-redux";
import {useEffect,useState} from 'react'

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
            dispatch({type: 'like-tuit', addLikes:1, tuit});
        };
    const dislikeTuit = () => {
        dispatch({type: 'dislike-tuit', addDislikes:1, tuit});
    };
    return (
    <>
        <div className="wd-grid-icon-num-bottom">
            <div className="wd-grid-icon-num-bottom-1">
                <i className="far fa-comment"></i><span> {tuit.replies}</span>
            </div>
            <div className="wd-grid-icon-num-bottom-1">
                <i className="fa fa-retweet"></i><span> {tuit.retuits}</span>
            </div>
            <div className="wd-grid-icon-num-bottom-1">
                     <span onClick={likeTuit}>
                        {
                            tuit.liked &&
                            <i className="fas fa-heart me-1"
                               style={{color: 'red'}}></i>
                        }
                        {
                            !tuit.liked &&
                            <i className="far fa-heart me-1"></i>
                        }

                    </span><span> {tuit && tuit.likes}</span>
            </div>
            <div className="wd-grid-icon-num-bottom-1">
                              <span onClick={dislikeTuit}>
                                  {
                                      tuit.disliked &&
                                      <i className="fa fa-thumbs-down me-1"
                                         style={{color: 'grey'}}></i>
                                  }
                                  {
                                      !tuit.disliked &&
                                      <i className="fa fa-thumbs-down me-1"></i>
                                  }

                              </span><span> {tuit && tuit.dislikes}</span>

                        </div>
            <div className="wd-grid-icon-num-bottom-1">
               <i className="fa fa-share"></i>
            </div>
        </div>
    </>
);
}
export default TuitStats;