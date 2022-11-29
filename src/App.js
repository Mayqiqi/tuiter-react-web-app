import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.css';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {HashRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
   return (

      <HashRouter>
         <div className="container">
             <Routes>
                <Route index element={<Labs/>}/>
                <Route path="/hello" element={<HelloWorld/>}/>
                <Route path="/tuiter/*" element={<Tuiter/>}/>
                <Route path="/*" element={<Labs/>}/>


             </Routes>


         </div>

      </HashRouter>

   );
}
export default App;