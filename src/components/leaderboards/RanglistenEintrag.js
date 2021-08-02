import '../design/leaderboards/RanglistenEintrag.css';
import {Route, Link} from "react-router-dom";


function RanglistenEintrag(props) {
    return (
    <div>
      <Link to="/Profil">
           <div id="RanglistenEintrag">

           <div id="Ranglisteneintragleft">
            <h3 id="RanglistenEintragPLatzh3">
               {props.Platz}
           </h3>
        
           <h3 id="RanglistenEintragh3">
               {props.user}
            </h3>
          </div>
          
          <h3 id="RanglistenEintragh3">
               {props.TrophieScore}
          </h3>
          
          </div>
        

      </Link>
      
    </div>
    ); 
    }
   
  export default RanglistenEintrag;
  