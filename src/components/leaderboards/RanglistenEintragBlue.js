import '../design/leaderboards/RanglistenEintragBlue.css';
import {Route, Link} from "react-router-dom";



function RanglistenEintragBlue(props) {
    return (
    <div>
      <Link to="/Profil">

        <div id="RanglistenEintragBlue">

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
   
  export default RanglistenEintragBlue;
  