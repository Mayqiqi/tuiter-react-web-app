import {useDispatch} from "react-redux";
import TuitStats from "../tuitStats/tuit-stats"
import {deleteTuit} from "./tuits-reducer";
import "./index.css";

const TuitItem = ({tuit}) =>{
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
      dispatch(deleteTuit(id));
    }


    return(
        <>
        <li className="list-group-item">
            <div className="wd-grid-image-left">
                <img className="wd-avatar-image" src={`./images/${tuit.image}`} alt=""/>
            </div>

            <div className="wd-tuit">
                <div className="wd-tuit-heading">
                    <div className="wd-tuit-authorname">
                        {tuit.userName} <i className="fa fa-check-circle"></i><span className="wd-tuit-handle"> {tuit.handle}</span> <span className="wd-tuit-time"> {tuit.time}</span>
                        <i className="bi bi-x-lg float-end"
                        onClick={() => deleteTuitHandler(tuit._id)}></i>

                    </div>
                </div>

                <div className="wd-tuit-content">
                    <div className="wd-tuit-content-text">
                        {tuit.tuit}
                    </div>

                </div>
                <TuitStats tuit={tuit} />
            </div>
        </li>
        </>
    )
}
export default TuitItem;