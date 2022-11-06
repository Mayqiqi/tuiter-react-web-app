import TuitList from "../tuits/tuitsList";
import WhatsHappening from "./whats-happening";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

const HomeComponent = () => {
  const dispatch = useDispatch();

  const setNavActive = (active) => {
      return {
          type: "change-active",
          active,
      };
  };

  useEffect(() => {
      dispatch(setNavActive("Home"));
  }, [dispatch]);


  return(

    <>
      <WhatsHappening/>
      <TuitList/>
    </>

);
}
export default HomeComponent;